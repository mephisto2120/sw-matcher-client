import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import {PersonService} from "../../service/PersonService";
import {Person} from "../../model/interfaces";

export const searchPersons = (lastName: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_PERSONS,
    });

    try {
      // const { data } = await axios.get(
      //   'https://registry.npmjs.org/-/v1/search',
      //   {
      //     params: {
      //       text: lastName,
      //     },
      //   }
      // );
      const { data } = await axios.get('http://localhost:8080/person/get?customerId=987');

      // persons.map((person) => {
      const names = data.map((person: Person) => {
        return person.lastName;
      });

      dispatch({
        type: ActionType.SEARCH_PERSONS_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_PERSONS_ERROR,
        payload: err.message,
      });
    }
  };
};
