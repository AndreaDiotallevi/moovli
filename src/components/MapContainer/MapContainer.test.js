import React from 'react';
import { shallow } from 'enzyme';
import MapContainer from './MapContainer';

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe('MapContainer', () => {
  it('should render without errors', () => {
    const wrapper = setUp(MapContainer, {});
    expect(wrapper).toHaveLength(1);
  });
});
