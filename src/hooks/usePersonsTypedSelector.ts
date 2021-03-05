import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootPersonsState} from "state";

export const usePersonsTypedSelector: TypedUseSelectorHook<RootPersonsState> = useSelector;
