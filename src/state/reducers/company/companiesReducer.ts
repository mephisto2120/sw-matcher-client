import {Company} from "model/interfaces";
import {SearchCompaniesActionType} from "state/action-types/company";
import {CompaniesAction} from "state/actions/company";

export interface CompaniesState {
  loading: boolean;
  error: string | null;
  data: Company[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: CompaniesState = initialState,
  action: CompaniesAction
): CompaniesState => {
  switch (action.type) {
    case SearchCompaniesActionType.SEARCH_COMPANIES:
      return {loading: true, error: null, data: []};
    case SearchCompaniesActionType.SEARCH_COMPANIES_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    case SearchCompaniesActionType.SEARCH_COMPANIES_ERROR:
      return {loading: false, error: action.payload, data: []};
    default:
      return state;
  }
};

export default reducer;
