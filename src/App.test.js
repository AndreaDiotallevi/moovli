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
});
