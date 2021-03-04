import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchPersonsReducers from "state/reducers";

export const store = createStore(searchPersonsReducers, {}, applyMiddleware(thunk));
