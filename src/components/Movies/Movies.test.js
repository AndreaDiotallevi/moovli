import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';
import { fireEvent } from '@testing-library/react';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
}

describe('Movies', () => {
  let wrapper;
  let movie1 = {id: 1,
                 title: 'title',
                 overview: 'overview',
                 releaseDate: '2020-01-01',
                 voteAverage: 9.5,
                 posterUrl: 'https://image.tmdb.org/t/p/w200/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
                 genreList: ['Comedy']
  }
  let movie2 = {id: 2,
      title: 'title crime',
      overview: 'overview',
      releaseDate: '2020-01-01',
      voteAverage: 9.5,
      posterUrl: 'https://image.tmdb.org/t/p/w200/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
      genreList: ['Crime']
  }

  beforeEach(() => {
    wrapper = setUp(Movies, {country: 'Poland',
                             movies: [movie1],
                             selectedGenre: null
                            })
  })

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1);
  })

  it("should render 'You have choosen Poland! when clicked within UK", () => {
    const h1 = wrapper.find("[data-test='movies-country-message']");
    expect(h1.text()).toEqual('You have choosen Poland!');
  })
  
  it('should render the movies title', () => {
    const h3 = wrapper.find("[data-test='movie-title-1']")
    expect(h3.text()).toEqual('title')
  })

  it('should render the movies overview', () => {
    const p = wrapper.find("[data-test='movie-overview-1']")
    expect(p.text()).toEqual('overview')
  })

  it('should render the movies release date', () => {
    const p = wrapper.find("[data-test='movie-release-date-1']")
    expect(p.text()).toEqual('2020-01-01')
  })

  it('should render the movies vote average', () => {
    const p = wrapper.find("[data-test='movie-vote-average-1']")
    expect(p.text()).toEqual('9.5')
  })

  it('should render the movies poster', () => {
    const img = wrapper.find("[data-test='movie-poster-url-1']")
    expect(img.props().src).toEqual('https://image.tmdb.org/t/p/w200/dom2esWWW8C9jS2v7dOhW48LwHh.jpg')
  })
  
  it('should render the movies genre', () => {
    const p = wrapper.find("[data-test='movie-genre-list-1']")
    expect(p.text()).toEqual('Genre/s: Comedy')
  })

  it('should render a button for filtering movies by genre', () => {
    const wrapper = setUp(Movies, {country: 'Poland',
                             movies: [movie1, movie2],
                             selectedGenre: null
                            })
    const button = wrapper.find("[data-test='genre-button-comedy']")
    expect(button).toHaveLength(1);
  })
})
