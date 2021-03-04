import axios from 'axios';
import {Dispatch} from 'redux';
import {SearchPersonsActionType} from 'state/action-types';
import {Person} from 'model/interfaces';
import {PersonsAction} from 'state/actions';

interface PersonSearchCriteria {
  customerId: number;
  firstName: string;
  lastName: string
}

export default PersonSearchCriteria;

export const searchPersons = (personSearchCriteria: PersonSearchCriteria) => {
  return async (dispatch: Dispatch<PersonsAction>) => {
    dispatch({
      type: SearchPersonsActionType.SEARCH_PERSONS,
    });

    try {
      const {data} = await axios.get(
        'http://localhost:8080/person/get',
        {
          params: {
            customerId: personSearchCriteria.customerId,
            firstName: personSearchCriteria.firstName,
            lastName: personSearchCriteria.lastName
          },
        }
      );

      // const {data} = await axios.get('http://localhost:8080/person/get?customerId=' + personSearchCriteria.customerId);

      const persons: Person[] = data.map((person: Person) => {
        return person;
      });

      dispatch({
        type: SearchPersonsActionType.SEARCH_PERSONS_SUCCESS,
        payload: persons,
      });
    } catch (err) {
      const errorMessage = err.response && err.response.status && err.response.status === 404 ?  'No person found' : err.message;
      dispatch({
        type: SearchPersonsActionType.SEARCH_PERSONS_ERROR,
        payload: errorMessage,
      });
    }
  };
};
