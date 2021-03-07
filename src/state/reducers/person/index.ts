import {combineReducers} from 'redux';
import personsReducer from "state/reducers/person/personsReducer";

const searchPersonsReducers = combineReducers({
  persons: personsReducer,
});

export default searchPersonsReducers;

export type RootState = ReturnType<typeof searchPersonsReducers>;
