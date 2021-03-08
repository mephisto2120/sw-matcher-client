import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonRoot from 'PersonRoot';
import CompanyRoot from 'CompanyRoot';
import PersonSearchingView from 'PersonSearchingView';
import CompanySearchingView from 'CompanySearchingView';
import PersonDashboard from 'components/person/PersonDashboard';
// import { BrowserRouter, Route } from 'react-router-dom';
import CompanyDashboard from 'components/company/CompanyDashboard';

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
    // <BrowserRouter>
    //   <App>
    //     <Route path="/" exact component={PersonDashboard} />
    //     <Route path="/signup" component={CompanyDashboard} />
    //   </App>
    // </BrowserRouter>
    // <PersonDashboard/>
    <div>
      <h4>Searching</h4>
      <CompanyDashboard/>
    </div>
  );
}

export default App;
