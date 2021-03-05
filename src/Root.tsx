import React from 'react';
import {Provider} from 'react-redux';
import {personsStore} from "state";

export default function props(props: any) {
  return (
    <Provider store={personsStore}>
      {props.children}
    </Provider>
  );
}
