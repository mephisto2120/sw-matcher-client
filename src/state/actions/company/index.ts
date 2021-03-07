import {SearchCompaniesActionType} from 'state/action-types/company';
import {Company} from 'model/interfaces';


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
  | SearchCompaniesErrorAction
