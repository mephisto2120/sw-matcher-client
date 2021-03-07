import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootCompanyState} from "state/company";

export const useCompaniesTypedSelector: TypedUseSelectorHook<RootCompanyState> = useSelector;
