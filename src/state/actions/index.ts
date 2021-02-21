import { ActionType } from '../action-types';

interface SearchPersonsAction {
  type: ActionType.SEARCH_PERSONS;
}

interface SearchPersonsSuccessAction {
  type: ActionType.SEARCH_PERSONS_SUCCESS;
  payload: string[];
}

interface SearchPersonsErrorAction {
  type: ActionType.SEARCH_PERSONS_ERROR;
  payload: string;
}

export type Action =
  | SearchPersonsAction
  | SearchPersonsSuccessAction
  | SearchPersonsErrorAction;
