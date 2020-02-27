import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./api/fetchCountryCode');
jest.mock('./api/fetchMovieData');
jest.mock('./api/fetchMovies');
jest.mock('./api/fetchCoordinates');

const setUp = (Component = {}) => {
  const component = shallow(<Component />);
  return component;
};

const movie = {
  imdbID: 1,
  title: 'Title',
  plot: 'Plot',
  releaseDate: '2020-01-01',
  imdbRating: 9.5,
  posterURL: 'https://image.tmdb.org/t/p/w400/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
  genreList: ['Comedy'],
};

describe('App', () => {
  it('should render without errors', () => {
    const wrapper = setUp(App);
    expect(wrapper).toHaveLength(1);
  });

  it('should handle back to home functionality', () => {
    const wrapper = setUp(App);
    wrapper.setState({
      movies: ["movie"],
      infoWindowVisible: false
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleBackToHome');
    instance.handleBackToHome();

    expect(wrapper.state('movies')).toEqual([]);
  });

  it('should be able to handle a country choice', async () => {
    const wrapper = setUp(App);
    wrapper.setState({
      country: '',
      movies: [],
      infoWindowVisible: false
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleCountryChoice');
    await instance.handleCountryChoice({}, {}, "Poland coordinates");

    expect(wrapper.state('country')).toEqual('Poland');
    expect(wrapper.state('movies')).toEqual([movie]);
  });

  it('should be able to catch an error if there are no movies for a country', async () => {
    const wrapper = setUp(App);
    wrapper.setState({
      country: '',
      movies: [],
      infoWindowVisible: false
    });

    expect(wrapper.state('infoWindowVisible')).toEqual(false);

    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleCountryChoice');
    await instance.handleCountryChoice({}, {}, "Benin coordinates")
    
    expect(wrapper.state('infoWindowVisible')).toEqual(true);
  })
});
