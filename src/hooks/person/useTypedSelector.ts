import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from "state/person";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
