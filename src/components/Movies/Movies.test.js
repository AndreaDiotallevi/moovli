import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('Movies', () => {
  let wrapper;
  const movie1 = {
    imdbID: 1,
    title: 'title',
    plot: 'plot',
    releaseDate: '2020-01-01',
    imdbRating: 9.5,
    posterURL: 'https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
    genreList: ['Comedy'],
  };

  beforeEach(() => {
    wrapper = setUp(Movies, {
      country: 'Poland',
      movies: [movie1],
      selectedGenre: null,
    });
  });

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should render 'You Have Chosen Poland! when clicked within UK", () => {
    const h1 = wrapper.find("[data-test='movies-country-message']");
    expect(h1.text()).toEqual('You Have Chosen Poland!');
  });

  it('should render the movies title', () => {
    const h2 = wrapper.find("[data-test='movie-title-1']");
    expect(h2.text()).toEqual('title');
  });

  it('should render the movies plot', () => {
    const p = wrapper.find("[data-test='movie-plot-1']");
    expect(p.text()).toEqual('plot');
  });

  it('should render the movies release date', () => {
    const p = wrapper.find("[data-test='movie-release-date-1']");
    expect(p.text()).toEqual('2020-01-01');
  });

  it('should render the movies vote average', () => {
    const p = wrapper.find("[data-test='movie-vote-average-1']");
    expect(p.text()).toEqual('IMDB Rating: 9.5');
  });

  it('should render the movies poster', () => {
    const img = wrapper.find("[data-test='movie-poster-url-1']");
    expect(img.props().src).toEqual('https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg');
  });

  it('should call onError when passed bad src', () => {
    const movieWithNoPoster = {
      imdbID: 1,
      title: 'title',
      plot: 'plot',
      releaseDate: '2020-01-01',
      imdbRating: 9.5,
      posterURL: 'https://notExistent',
      genreList: ['Comedy']
    }
    wrapper = setUp(Movies, {
      country: 'Poland',
      movies: [movieWithNoPoster],
      selectedGenre: null,
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleImageUrlError');
    const mockedEvent = { target: { onerror: null } };
    instance.handleImageUrlError(mockedEvent);

    expect(instance.handleImageUrlError).toHaveBeenCalledWith(mockedEvent);
  });

  it('should render the movies genre', () => {
    const p = wrapper.find("[data-test='movie-genre-list-1']");
    expect(p.text()).toEqual('Genres: Comedy');
  });

  it('should be able to filter the movies by genre', () => {
    expect(wrapper.state('selectedGenre')).toEqual(null);

    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleGenreChoice');
    const button = wrapper.find("[data-test='genre-button-comedy']");
    expect(button).toHaveLength(1);

    const mockedEvent = { target: { value: 'Comedy' } };
    button.simulate('click', mockedEvent);
    expect(wrapper.state('selectedGenre')).toEqual('Comedy');
  });
});
