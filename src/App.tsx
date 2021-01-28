import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonService from "./components/PersonService";

function App() {
  let personService = new PersonService();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/*Person: {personService.getPerson(BigInt(987))}*/}
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
