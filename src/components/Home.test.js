import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

const setUp = (props={}) => {
  const component = shallow(<Home {...props} />);
  return component;
}

describe("Home", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    component;
  })

  it("should contain the text 'Moovli' when rendered", () => {
    const h1 = component.find({ id: "title" })
    expect(h1.text()).toEqual("Moovli")
  })
})
