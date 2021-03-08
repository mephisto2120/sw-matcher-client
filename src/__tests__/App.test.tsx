import React from 'react';
import {shallow} from 'enzyme';
import App from 'App';
import CompanyDashboard from 'components/company/CompanyDashboard';

it('should contain PersonView', () => {
  const wrapped = shallow(<App/>);

  expect(wrapped.find(CompanyDashboard).length).toEqual(1);
});
