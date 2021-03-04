import React from 'react';
import {shallow} from 'enzyme';
import PersonSearchingView from 'PersonSearchingView';
import App from 'App';

it('should contain PersonView', () => {
  const wrapped = shallow(<App/>);

  expect(wrapped.find(PersonSearchingView).length).toEqual(1);
});
