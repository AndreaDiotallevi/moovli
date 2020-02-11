import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component />);
  return component;
}

describe('App', () => {

  it('should render without errors', () => {
    const wrapper = setUp(App);
    expect(wrapper).toHaveLength(1);
  })
  
})
