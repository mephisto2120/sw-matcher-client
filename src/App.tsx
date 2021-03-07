import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonRoot from 'PersonRoot';
import CompanyRoot from 'CompanyRoot';
import PersonSearchingView from 'PersonSearchingView';
import CompanySearchingView from 'CompanySearchingView';

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
    <PersonRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <PersonSearchingView/>
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
    </PersonRoot>
  );
}

export default App;
