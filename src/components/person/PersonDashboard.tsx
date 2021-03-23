import React, {Component} from 'react';
import PersonRoot from 'PersonRoot';
import logo from 'logo.svg';
import PersonSearchingView from 'PersonSearchingView';

class PersonDashboard extends Component {
  render() {
    return (
      <PersonRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <PersonSearchingView/>
          </header>
        </div>
      </PersonRoot>
    );
  }
}

export default PersonDashboard;
