import React, {Component} from 'react';
import CompanyRoot from 'CompanyRoot';
import logo from 'logo.svg';
import CompanySearchingView from 'CompanySearchingView';

class CompanyDashboard extends Component {
  render() {
    return (
      <CompanyRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <CompanySearchingView/>
          </header>
        </div>
      </CompanyRoot>
    );
  }
}

export default CompanyDashboard;
