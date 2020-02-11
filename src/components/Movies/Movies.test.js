import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
}

describe('Movies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setUp(Movies, {country: 'Poland',
                             movies: [{id: 1,
                                       title: 'title',
                                       overview: 'overview',
                                       releaseDate: '2020-01-01',
                                       voteAverage: 9.5,
                                       posterUrl: 'https://image.tmdb.org/t/p/w200/dom2esWWW8C9jS2v7dOhW48LwHh.jpg',
                                       genreList: ['Comedy']
                                      }]
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
})
