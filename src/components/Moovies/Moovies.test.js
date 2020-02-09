import React from 'react';
import { shallow } from 'enzyme';
import Moovies from './Moovies';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
}

describe('Moovies', () => {

  it('should render without errors', () => {
    const wrapper = setUp(Moovies, {country: '', moovies: []});
    expect(wrapper).toHaveLength(1);
  })

  it("should render 'You have choosen United Kingdom! when clicked within UK", () => {
    const wrapper = setUp(Moovies, {country: 'United Kingdom', moovies: []});
    const h1 = wrapper.find("[data-test='moovies-country-message']");
    expect(h1.text()).toEqual('You have choosen United Kingdom!');
    expect
  })
  
})
