import React from 'react';
import { shallow } from 'enzyme';
import Movies from './Movies';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
}

describe('Movies', () => {

  it('should render without errors', () => {
    const wrapper = setUp(Movies, {country: '', movies: []});
    expect(wrapper).toHaveLength(1);
  })

  it("should render 'You have choosen United Kingdom! when clicked within UK", () => {
    const wrapper = setUp(Movies, {country: 'United Kingdom', movies: []});
    const h1 = wrapper.find("[data-test='movies-country-message']");
    expect(h1.text()).toEqual('You have choosen United Kingdom!');
    expect
  })
  
})
