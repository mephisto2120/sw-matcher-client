import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootCompaniesState} from "state";

export const useCompaniesTypedSelector: TypedUseSelectorHook<RootCompaniesState> = useSelector;
