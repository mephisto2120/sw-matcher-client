import {Person} from "model/interfaces";
import {ActionType} from "state/action-types";
import {Action} from "state/actions";

interface PersonsState {
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
  action: Action
): PersonsState => {
  switch (action.type) {
    case ActionType.SEARCH_PERSONS:
      return {loading: true, error: null, data: []};
    case ActionType.SEARCH_PERSONS_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case ActionType.SEARCH_PERSONS_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
};

export default reducer;
