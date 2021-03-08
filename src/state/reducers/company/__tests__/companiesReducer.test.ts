import companiesReducer, {CompaniesState} from 'state/reducers/company/companiesReducer';
import {SearchCompaniesActionType} from 'state/action-types/company';

const initialState: CompaniesState = {
  loading: false,
  error: null,
  data: []
};

it('handles actions of type SEARCH_PERSONS', () => {
  const action = {
    type: SearchCompaniesActionType.SEARCH_COMPANIES
  };
  const expectedStateWhenSearching = {loading: true, error: null, data: []};

  const newState = companiesReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearching);
});

it('handles actions of type SEARCH_COMPANIES_SUCCESS', () => {
  const action = {
    type: SearchCompaniesActionType.SEARCH_COMPANIES_SUCCESS,
    payload: []
  };
  const expectedStateWhenSearchingWithSuccess = {loading: false, error: null, data: []};


  const newState = companiesReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingWithSuccess);
});

it('handles actions of type SEARCH_COMPANIES_ERROR', () => {
  const networkError = 'Network error';
  const action = {
    type: SearchCompaniesActionType.SEARCH_COMPANIES_ERROR,
    payload: networkError
  };
  const expectedStateWhenSearchingFailure = {loading: false, error: networkError, data: []};

  const newState = companiesReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingFailure);
});
