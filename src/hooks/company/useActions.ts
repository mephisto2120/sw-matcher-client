import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from 'state/company';

export const useCompanyActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
