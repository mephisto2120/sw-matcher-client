import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import searchPersonsReducers from "state/reducers";

export const personsStore = createStore(searchPersonsReducers, {}, applyMiddleware(thunk));
