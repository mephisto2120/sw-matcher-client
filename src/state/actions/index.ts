import {ActionType} from '../action-types';
import {Person} from "../../model/interfaces";

interface SearchPersonsAction {
  type: ActionType.SEARCH_PERSONS;
}

interface SearchPersonsSuccessAction {
  type: ActionType.SEARCH_PERSONS_SUCCESS;
  payload: Person[];
}

interface SearchPersonsErrorAction {
  type: ActionType.SEARCH_PERSONS_ERROR;
  payload: string;
}

export type Action =
  | SearchPersonsAction
  | SearchPersonsSuccessAction
  | SearchPersonsErrorAction;
