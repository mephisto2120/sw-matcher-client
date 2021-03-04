import React from 'react';
import {Provider} from 'react-redux';
import {store} from "state";

export default function props(props: any) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}
