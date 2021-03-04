import {SearchPersonsActionType} from 'state/action-types';
import {Person} from 'model/interfaces';

interface SearchPersonsAction {
  type: SearchPersonsActionType.SEARCH_PERSONS;
}

interface SearchPersonsSuccessAction {
  type: SearchPersonsActionType.SEARCH_PERSONS_SUCCESS;
  payload: Person[];
}

interface SearchPersonsErrorAction {
  type: SearchPersonsActionType.SEARCH_PERSONS_ERROR;
  payload: string;
}

export type PersonsAction =
  | SearchPersonsAction
  | SearchPersonsSuccessAction
  | SearchPersonsErrorAction;
