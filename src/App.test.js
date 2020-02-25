import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setUp = (Component = {}) => {
  const component = shallow(<Component />);
  return component;
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
      infoWindowVisible: true
    });
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleBackToHome');
    instance.handleBackToHome();
    
    expect(wrapper.state('movies')).toEqual([]);
    expect(wrapper.state('infoWindowVisible')).toEqual(false);
  })
});
