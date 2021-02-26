import personsReducer from "state/reducers/personsReducer";
import {PersonsState} from "state/reducers/personsReducer";
import {ActionType} from "state/action-types";

const initialState : PersonsState = {
  loading: false,
  error: null,
  data: []
};

it('handles actions of type SEARCH_PERSONS', () => {
  const action = {
    type: ActionType.SEARCH_PERSONS
  };
  const expectedStateWhenSearching = {loading: true, error: null, data: []};

  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearching);
});

it('handles actions of type SEARCH_PERSONS_SUCCESS', () => {
  const action = {
    type: ActionType.SEARCH_PERSONS_SUCCESS,
    payload: []
  };
  const expectedStateWhenSearchingWithSuccess = {loading: false, error: null, data: []};


  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingWithSuccess);
});

it('handles actions of type SEARCH_PERSONS_ERROR', () => {
  const networkError = 'Network error';
  const action = {
    type: ActionType.SEARCH_PERSONS_ERROR,
    payload: networkError
  };
  const expectedStateWhenSearchingFailure = {loading: false, error: networkError, data: []};

  const newState = personsReducer(initialState, action);

  expect(newState).toEqual(expectedStateWhenSearchingFailure);
});
