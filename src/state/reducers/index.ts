import {combineReducers} from 'redux';
import personsReducer from 'state/reducers/personsReducer';
import companiesReducer from 'state/reducers/companiesReducer';

const searchPersonsReducers = combineReducers({
  persons: personsReducer,
});

export default searchPersonsReducers;

export type RootPersonsState = ReturnType<typeof searchPersonsReducers>;

export const searchCompaniesReducers = combineReducers({
  companies: companiesReducer,
});

export type RootCompaniesState = ReturnType<typeof searchCompaniesReducers>;


