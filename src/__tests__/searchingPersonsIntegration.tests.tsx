import React from 'react';
import {mount} from 'enzyme';
import PersonSearchingView from 'PersonSearchingView';
import Root from 'Root';
import moxios from 'moxios';
import {Person} from 'model/interfaces';
import {HttpStatus} from 'http/HttpStatus';


const foundPerson: Person = {
  "personId": 999,
  "customerId": 987,
  "firstName": "John",
  "lastName": "Debtor",
  "birthDate": "1970-02-04",
  "city": "New York",
  "zipCode": "null",
  "street": "Washington",
  "houseNumber": "24",
  "email": "john.debtor@gmail.com",
  "createdDate": "2021-03-01T15:12:16.984",
  "lastModified": "2021-03-01T15:12:16.984"
};


beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:8080/person/get?customerId=987&firstName=John&lastName=Debtor', {
  // moxios.stubRequest(/.*/, {
    status: HttpStatus.OK,
    response: [foundPerson]
  });
});

afterEach(() => {
  moxios.uninstall();
});



it('should return searched person', done => {
  const component = mount(
    <Root>
      <PersonSearchingView/>
    </Root>
  );

  const header = component.find('h1').text();
  expect(header).toEqual('Search for persons');

  const customerIdInput = component.find({id: "customerIdInput"})
  customerIdInput.simulate('change', {target: {value: '987'}});

  const firstNameInput = component.find({id: "firstNameInput"})
  firstNameInput.simulate('change', {target: {value: 'John'}});

  const lastNameInput = component.find({id: "lastNameInput"})
  lastNameInput.simulate('change', {target: {value: 'Debtor'}});

  const searchPersonsButton = component.find({id: "searchPersons"})

  searchPersonsButton.simulate('click');

  moxios.wait(() => {
    component.update();

    // const found = component.find('li');
    // expect(found.length).toEqual(1);
    // expect(found.text()).toContain('John');

    done();
    component.unmount();
  });
});
