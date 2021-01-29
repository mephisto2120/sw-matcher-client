import React from 'react';

const Persons = (props) => {
    const {repos: persons} = props;
    if (!persons || persons.length === 0) return <p>No persons found, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Found persons</h2>
            {persons.map((person) => {
                return (
                    <li key={person.personId} className='list'>
                        <span className='repo-text'>{person.firstName} </span>
                        <span className='repo-description'>{person.lastName}</span>
                        <span className='repo-text'>{person.birthDate} </span>
                        <span className='repo-text'>{person.city} </span>
                        <span className='repo-text'>{person.zipCode} </span>
                        <span className='repo-text'>{person.street} </span>
                        <span className='repo-text'>{person.houseNumber} </span>
                        <span className='repo-text'>{person.email} </span>
                        <span className='repo-text'>{person.createdDate} </span>
                        <span className='repo-text'>{person.lastModified} </span>
                    </li>
                );
            })}
        </ul>
    );
};
export default Persons;
