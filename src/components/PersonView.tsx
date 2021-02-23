import React, {useState} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import {PersonList} from "../view/Person";

const PersonView: React.FC = () => {
  const [lastName, setLastName] = useState('');
  const {searchPersons} = useActions();
  const {data, error, loading} = useTypedSelector(
    (state) => state.persons
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchPersons(lastName);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <PersonList persons={data}/>}
    </div>
  );
};

export default PersonView;
