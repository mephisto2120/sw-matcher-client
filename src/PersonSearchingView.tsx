import React, {Component} from 'react';
import PersonView from 'components/person/PersonView';

class PersonSearchingView extends Component {
  render() {
    return (
      <div>
        <h1>Search for persons</h1>
        <PersonView/>
      </div>
    );
  }
}

export default PersonSearchingView;