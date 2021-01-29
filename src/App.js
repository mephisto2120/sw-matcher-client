import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Persons from './components/Persons';
import withListLoading from './components/withListLoading';

function App() {
    const ListLoading = withListLoading(Persons);
    const [appState, setAppState] = useState({
        loading: false,
        persons: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = 'http://localhost:8080/person/get?customerId=987';
        axios.get(apiUrl).then((persons) => {
            const allPersons = persons.data;
            setAppState({loading: false, persons: allPersons});
        });
    }, [setAppState]);
    return (
        <div className='App'>
            <div className='container'>
                <h1>Found persons</h1>
            </div>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} repos={appState.persons}/>
            </div>
            <footer>
                <div className='footer'>
                    Built{' '}
                    <span role='img' aria-label='love'>
            💚
          </span>{' '}
                    with by mephisto2120
                </div>
            </footer>
        </div>
    );
}

export default App;