import {combineReducers} from 'redux';
import companiesReducer from "state/reducers/company/companiesReducer";

const searchCompaniesReducers = combineReducers({
  companies: companiesReducer,
});

export default searchCompaniesReducers;

export type RootCompanyState = ReturnType<typeof searchCompaniesReducers>;
