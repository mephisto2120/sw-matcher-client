import React from 'react';
import {shallow} from 'enzyme';
import App from 'App';
import Header from 'components/Header';

it('should contain Header', () => {
  const wrapped = shallow(<App/>);

  expect(wrapped.find(Header).length).toEqual(1);
});
