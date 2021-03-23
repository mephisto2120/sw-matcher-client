import PersonSearchCriteria, {searchPersons} from 'state/action-creators/person/index';
import {Person} from 'model/interfaces';
import {SearchPersonsActionType} from 'state/action-types/person';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {HttpStatus} from 'http/HttpStatus';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios, {delayResponse: 2000});
const storeMock = mockStore();

describe('searchPersons actions', () => {
  beforeEach(() => {
    storeMock.clearActions();
  });

  it('dispatches SEARCH_PERSONS after a successful request', () => {
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

    const personSearchCriteria: PersonSearchCriteria = {
      customerId: 987,
      firstName: "John",
      lastName: "Debtor"
    };
    mock.onGet('http://localhost:8080/person/get?customerId=987&firstName=John&lastName=Debtor').reply(
      HttpStatus.OK,
      {response: [foundPerson]}
      );

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchPersonsActionType.SEARCH_PERSONS},
        {
          type: SearchPersonsActionType.SEARCH_PERSONS_SUCCESS,
          payload: [foundPerson]
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_PERSONS_ERROR after a FAILED API request', () => {
    mock.onGet('http://localhost:8080/person/get?customerId=888&firstName=Boris&lastName=Spasski').reply(
      HttpStatus.BAD_REQUEST,
      {error: {message: 'error message'}}
      );

    const personSearchCriteria: PersonSearchCriteria = {
      customerId: 888,
      firstName: "Boris",
      lastName: "Spasski"
    };

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchPersonsActionType.SEARCH_PERSONS},
        {
          type: SearchPersonsActionType.SEARCH_PERSONS_ERROR,
          payload: 'Request failed with status code 400'
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_PERSONS_ERROR after response which does not found person', () => {
    mock.onGet('http://localhost:8080/person/get?customerId=888&firstName=Boris&lastName=Spasski').reply(
      HttpStatus.NOT_FOUND,
      {error: {message: 'error message'}}
      );

    const personSearchCriteria: PersonSearchCriteria = {
      customerId: 999,
      firstName: "Hikaru",
      lastName: "Nakamura"
    };

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchPersonsActionType.SEARCH_PERSONS},
        {
          type: SearchPersonsActionType.SEARCH_PERSONS_ERROR,
          payload: 'No person found'        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });
});
