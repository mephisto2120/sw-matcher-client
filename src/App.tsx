import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Person} from './model/interfaces'
import {SuperApi} from "./model/SuperApi";


function App() {
  const [person, setPerson] = useState<Person[]>([]);

  useEffect(() => {
    SuperApi.getApi()
        .then((person: Person[]) => {
          setPerson(person);
        })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {person.map(item => item.firstName)
            /*{person[0].firstName} {person[0].lastName} */}
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
  );
}

export default App;
