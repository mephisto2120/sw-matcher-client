import React, {Component} from 'react';
import CompanyView from 'components/company/CompanyView';

class CompanySearchingView extends Component {
  render() {
    return (
      <div>
        <h1>Search for companies</h1>
        <CompanyView/>
      </div>
    );
  }
}

export default CompanySearchingView;