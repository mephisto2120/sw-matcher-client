import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchCompaniesReducers from "state/reducers/company";

export const store = createStore(searchCompaniesReducers, {}, applyMiddleware(thunk));
