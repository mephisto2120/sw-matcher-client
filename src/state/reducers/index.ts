import {combineReducers} from 'redux';
import personsReducer from "state/reducers/personsReducer";

const reducers = combineReducers({
  persons: personsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
