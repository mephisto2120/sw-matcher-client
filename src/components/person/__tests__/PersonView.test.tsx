import React from 'react';
import {mount} from 'enzyme';
import PersonView from 'components/person/PersonView';
import PersonRoot from 'PersonRoot';


it('should contain fields for searching', () => {
  const component = mount(
    <PersonRoot>
      <PersonView/>
    </PersonRoot>
  );

  const customerIdDivText = component.find({id: "customerId"}).text();
  const firstNameDivText = component.find({id: "firstName"}).text();
  const lastNameDivText = component.find({id: "lastName"}).text();

  expect(customerIdDivText).toEqual('Customer id');
  expect(firstNameDivText).toEqual('First name');
  expect(lastNameDivText).toEqual('Last name');
  component.unmount();
});
