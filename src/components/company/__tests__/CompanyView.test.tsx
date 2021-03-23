import React from 'react';
import {mount} from 'enzyme';
import CompanyView from 'components/company/CompanyView';
import CompanyRoot from 'CompanyRoot';


it('should contain fields for searching', () => {
  const component = mount(
    <CompanyRoot>
      <CompanyView/>
    </CompanyRoot>
  );

  const customerIdDivText = component.find({id: "customerId"}).text();
  const nameDivText = component.find({id: "companyName"}).text();

  expect(customerIdDivText).toEqual('Customer id');
  expect(nameDivText).toEqual('Company name');
  component.unmount();
});
