import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';
import {PersonService} from "../../service/PersonService";
import {Person} from "../../model/interfaces";
import {useEffect, useState} from "react";

interface PersonSearchCriteria {
  customerId: number;
  firstName: string;
  lastName: string
}

export default PersonSearchCriteria;

export const searchPersons = (personSearchCriteria: PersonSearchCriteria) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PERSONS,
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
      console.log('persons: ' + persons)

      dispatch({
        type: ActionType.SEARCH_PERSONS_SUCCESS,
        payload: persons,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_PERSONS_ERROR,
        payload: err.message,
      });
    }
  };
};
