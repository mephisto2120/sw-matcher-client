import moxios from 'moxios';
import PersonSearchCriteria from 'state/action-creators';
import {searchPersons} from 'state/action-creators';
import {Person} from 'model/interfaces';
import {ActionType} from 'state/action-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const storeMock = mockStore();

describe('searchPersons actions', () => {
  beforeEach(() => {
    storeMock.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
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
    moxios.stubRequest('http://localhost:8080/person/get?customerId=987&firstName=John&lastName=Debtor', {
      status: 200,
      response: [foundPerson]
    });

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: ActionType.SEARCH_PERSONS},
        {
          type: ActionType.SEARCH_PERSONS_SUCCESS,
          payload: [foundPerson]
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_PERSONS_ERROR after a FAILED API request', () => {
    moxios.stubRequest('http://localhost:8080/person/get?customerId=888&firstName=Boris&lastName=Spasski', {
      status: 400,
      response: {error: {message: 'error message'}}
    });

    const personSearchCriteria: PersonSearchCriteria = {
      customerId: 888,
      firstName: "Boris",
      lastName: "Spasski"
    };

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: ActionType.SEARCH_PERSONS},
        {
          type: ActionType.SEARCH_PERSONS_ERROR,
          payload: 'Request failed with status code 400'
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_PERSONS_ERROR after response which does not found person', () => {
    moxios.stubRequest('http://localhost:8080/person/get?customerId=999&firstName=Hikaru&lastName=Nakamura', {
      status: 404,
      response: {error: {message: 'error message'}}
    });

    const personSearchCriteria: PersonSearchCriteria = {
      customerId: 999,
      firstName: "Hikaru",
      lastName: "Nakamura"
    };

    const action = searchPersons(personSearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: ActionType.SEARCH_PERSONS},
        {
          type: ActionType.SEARCH_PERSONS_ERROR,
          payload: 'No person found'        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });
});
