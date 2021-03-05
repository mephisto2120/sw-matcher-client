import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchCompanies} from 'state/action-creators/companiesActionCreators';

export const useCompanyActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(searchCompanies, dispatch);
};
