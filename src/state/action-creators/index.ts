import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType} from '../action-types';
import {Action} from '../actions';
import {PersonService} from "../../service/PersonService";
import {Person} from "../../model/interfaces";
import {useEffect, useState} from "react";

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

      const {data} = await axios.get('http://localhost:8080/person/get?customerId=987');

      const persons: Person[] = data.map((person: Person) => {
        return person;
      });
      console.log('persons: ' + persons)
      const names = persons.map((person: Person) => {
        return person.lastName;
      });

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
