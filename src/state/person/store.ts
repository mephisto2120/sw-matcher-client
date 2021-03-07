import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchPersonsReducers from "state/reducers/person";

export const store = createStore(searchPersonsReducers, {}, applyMiddleware(thunk));
