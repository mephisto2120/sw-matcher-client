import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from 'state/person';

export const usePersonActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
