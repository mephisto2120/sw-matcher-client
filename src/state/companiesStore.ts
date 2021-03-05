import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchCompaniesReducers from "state/reducers";

export const companiesStore = createStore(searchCompaniesReducers, {}, applyMiddleware(thunk));
