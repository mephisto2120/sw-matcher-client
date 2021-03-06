import personsReducer, {PersonsState} from 'state/reducers/person/personsReducer';
import {SearchPersonsActionType} from 'state/action-types/person';

const initialState: PersonsState = {
  loading: false,
  error: null,
  data: []
};

it('handles actions of type SEARCH_PERSONS', () => {
  const action = {
    type: SearchPersonsActionType.SEARCH_PERSONS
  };
  const expectedStateWhenSearching = {loading: true, error: null, data: []};

  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearching);
});

it('handles actions of type SEARCH_PERSONS_SUCCESS', () => {
  const action = {
    type: SearchPersonsActionType.SEARCH_PERSONS_SUCCESS,
    payload: []
  };
  const expectedStateWhenSearchingWithSuccess = {loading: false, error: null, data: []};

  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingWithSuccess);
});

it('handles actions of type SEARCH_PERSONS_ERROR', () => {
  const networkError = 'Network error';
  const action = {
    type: SearchPersonsActionType.SEARCH_PERSONS_ERROR,
    payload: networkError
  };
  const expectedStateWhenSearchingFailure = {loading: false, error: networkError, data: []};

  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingFailure);
});
