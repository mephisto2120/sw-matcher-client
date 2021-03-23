import {Person} from "model/interfaces";
import {SearchPersonsActionType} from "state/action-types/person";
import {PersonsAction} from "state/actions/person";

export interface PersonsState {
  loading: boolean;
  error: string | null;
  data: Person[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: PersonsState = initialState,
  action: PersonsAction
): PersonsState => {
  switch (action.type) {
    case SearchPersonsActionType.SEARCH_PERSONS:
      return {loading: true, error: null, data: []};
    case SearchPersonsActionType.SEARCH_PERSONS_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case SearchPersonsActionType.SEARCH_PERSONS_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
};

export default reducer;
