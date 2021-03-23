import moxios from 'moxios';
import CompanySearchCriteria from 'state/action-creators/company/index';
import {searchCompanies} from 'state/action-creators/company/index';
import {Company} from 'model/interfaces';
import {SearchCompaniesActionType} from 'state/action-types/company';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {HttpStatus} from 'http/HttpStatus';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const storeMock = mockStore();

describe('searchCompanies actions', () => {
  beforeEach(() => {
    storeMock.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatches SEARCH_COMPANIES after a successful request', () => {
    const foundCompany: Company = {
      "companyId": 111,
      "customerId": 123,
      "name": "Scylla",
      "city": "New York",
      "zipCode": "null",
      "street": "Washington",
      "localNumber": "24",
      "email": "scylla@gmail.com",
      "createdDate": "2021-03-01T15:12:16.984",
      "lastModified": "2021-03-01T15:12:16.984"
    };

    const companySearchCriteria: CompanySearchCriteria = {
      customerId: 123,
      name: "Scylla"
    };
    moxios.stubRequest('http://localhost:8080/company/get?customerId=123&name=Scylla', {
      status: HttpStatus.OK,
      response: [foundCompany]
    });

    const action = searchCompanies(companySearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchCompaniesActionType.SEARCH_COMPANIES},
        {
          type: SearchCompaniesActionType.SEARCH_COMPANIES_SUCCESS,
          payload: [foundCompany]
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_COMPANIES_ERROR after a FAILED API request', () => {
    moxios.stubRequest('http://localhost:8080/company/get?customerId=888&name=haribda', {
      status: HttpStatus.BAD_REQUEST,
      response: {error: {message: 'error message'}}
    });

    const companySearchCriteria: CompanySearchCriteria = {
      customerId: 888,
      name: "haribda"
    };

    const action = searchCompanies(companySearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchCompaniesActionType.SEARCH_COMPANIES},
        {
          type: SearchCompaniesActionType.SEARCH_COMPANIES_ERROR,
          payload: 'Request failed with status code 400'
        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });

  it('dispatches SEARCH_COMPANIES_ERROR after response which does not found company', () => {
    moxios.stubRequest('http://localhost:8080/company/get?customerId=999&name=amazon', {
      status: HttpStatus.NOT_FOUND,
      response: {error: {message: 'error message'}}
    });

    const companySearchCriteria: CompanySearchCriteria = {
      customerId: 999,
      name: "amazon"
    };

    const action = searchCompanies(companySearchCriteria);

    storeMock.dispatch(action).then(() => {
      const expectedActions = [
        {type: SearchCompaniesActionType.SEARCH_COMPANIES},
        {
          type: SearchCompaniesActionType.SEARCH_COMPANIES_ERROR,
          payload: 'No company found'        }
      ]
      expect(storeMock.getActions()).toEqual(expectedActions)
    });
  });
});
