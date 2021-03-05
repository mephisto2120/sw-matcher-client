import React, {useState} from 'react';
import {usePersonsTypedSelector} from 'hooks/usePersonsTypedSelector';
import { usePersonActions } from 'hooks/usePersonActions';
import PersonSearchCriteria from 'state/action-creators';
import {PersonList} from 'view/Person';

const PersonView: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {searchPersons} = usePersonActions();
  const {data, error, loading} = usePersonsTypedSelector(
    (state) => state.persons
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const personSearchCriteria : PersonSearchCriteria = {customerId: Number(customerId), firstName: firstName, lastName: lastName};
    searchPersons(personSearchCriteria);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div id="customerId">
          <span>Customer id</span><input id="customerIdInput" value={customerId} onChange={(e) => setCustomerId(e.target.value)}/>
        </div>
        <div id="firstName">
          <span>First name</span><input id="firstNameInput" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div id="lastName">
          <span>Last name</span><input id="lastNameInput" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <button id="searchPersons">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <PersonList persons={data}/>}
    </div>
  );
};

export default PersonView;
