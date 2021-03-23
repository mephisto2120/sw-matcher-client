import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootPersonState} from "state/person";

export const usePersonsTypedSelector: TypedUseSelectorHook<RootPersonState> = useSelector;
