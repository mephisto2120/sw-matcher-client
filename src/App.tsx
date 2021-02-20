import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Person} from './model/interfaces'
import {PersonService} from "./service/PersonService";
import {PersonList} from "./view/Person";

function App() {

    const [person, setPerson] = useState<Person[]>([]);

    useEffect(() => {
        PersonService.get()
            .then((person: Person[]) => {
                setPerson(person);
            })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div className='repo-container'>
                    <PersonList persons={person}></PersonList>
                </div>

                <p>
                    {person.map(item => item.firstName + ' ' + item.lastName)}
                </p>
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
    );
}

export default App;
