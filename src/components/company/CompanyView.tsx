import React, {useState} from 'react';
import {useCompaniesTypedSelector} from 'hooks/company/useTypedSelector';
import { useCompanyActions } from 'hooks/company/useActions';
import CompanySearchCriteria from 'state/action-creators/company';
import {CompanyList} from 'view/Company';

const CompanyView: React.FC = () => {
  const [customerId, setCustomerId] = useState('');
  const [name, setName] = useState('');
  const {searchCompanies} = useCompanyActions();
  const {data, error, loading} = useCompaniesTypedSelector(
    (state) => state.companies
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const companySearchCriteria : CompanySearchCriteria = {customerId: Number(customerId), name: name};
    searchCompanies(companySearchCriteria);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div id="customerId">
          <span>Customer id</span><input id="customerIdInput" value={customerId} onChange={(e) => setCustomerId(e.target.value)}/>
        </div>
        <div id="companyName">
          <span>Company name</span><input id="firstNameInput" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button id="searchCompanies">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && <CompanyList companies={data}/>}
    </div>
  );
};

export default CompanyView;

