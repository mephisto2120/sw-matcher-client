import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Person} from './model/interfaces'
import {PersonService} from "./service/PersonService";
import {PersonList} from "./view/Person";

import {Provider} from 'react-redux';
import PersonView from "./components/PersonView";
import {store} from "./state";

function App() {

  // const [persons, setPersons] = useState<Person[]>([]);
  //
  // useEffect(() => {
  //     PersonService.get()
  //         .then((persons: Person[]) => {
  //             setPersons(persons);
  //         })
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <div>
            <h1>Search for persons</h1>
            <PersonView/>
          </div>
          {/*<div className='repo-container'>*/}
          {/*    <PersonList persons={persons}></PersonList>*/}
          {/*</div>*/}

          {/*<p>*/}
          {/*    {persons.map(item => item.firstName + ' ' + item.lastName)}*/}
          {/*</p>*/}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
