import React from "react";
import {shallow} from "enzyme";
import App from "../App";
import PersonView from "../components/PersonView";

it('should contain PersonView', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(PersonView).length).toEqual(1);
});
