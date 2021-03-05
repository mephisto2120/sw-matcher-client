import {SearchPersonsActionType, SearchCompaniesActionType} from 'state/action-types';
import {Person, Company} from 'model/interfaces';

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

interface SearchCompaniesAction {
  type: SearchCompaniesActionType.SEARCH_COMPANIES;
}

interface SearchCompaniesSuccessAction {
  type: SearchCompaniesActionType.SEARCH_COMPANIES_SUCCESS;
  payload: Company[];
}

interface SearchCompaniesErrorAction {
  type: SearchCompaniesActionType.SEARCH_COMPANIES_ERROR;
  payload: string;
}

export type CompaniesAction =
  | SearchCompaniesAction
  | SearchCompaniesSuccessAction
  | SearchCompaniesErrorAction;
