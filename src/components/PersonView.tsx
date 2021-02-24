import React, {useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import {PersonList} from "../view/Person";
import PersonSearchCriteria from "../state/action-creators";

const PersonView: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {searchPersons} = useActions();
  const {data, error, loading} = useTypedSelector(
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
        <div>
          <span>Customer id</span><input value={customerId} onChange={(e) => setCustomerId(e.target.value)}/>
        </div>
        <div>
          <span>First name</span><input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
          <span>Last name</span><input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <PersonList persons={data}/>}
    </div>
  );
};

export default PersonView;
