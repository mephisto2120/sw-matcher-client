import React, {FunctionComponent} from 'react';
import {Company} from "model/interfaces";

type CompanyProps = {
  companies: Company[]
}

export const CompanyList: FunctionComponent<CompanyProps> = ({companies}) => <aside>
  <ul>
    {companies.length === 0 && <h2 className='list-head'>No company found</h2>}
    {companies.length > 0 && <h2 className='list-head'>Found companies</h2>}
    {companies.map((company) => {
      return (
        <li key={company.companyId} className='list'>
          <span className='repo-text'>{company.name} </span>
          <span className='repo-text'>{company.city} </span>
          <span className='repo-text'>{company.zipCode} </span>
          <span className='repo-text'>{company.street} </span>
          <span className='repo-text'>{company.localNumber} </span>
          <span className='repo-text'>{company.email} </span>
          <span className='repo-text'>{company.createdDate} </span>
          <span className='repo-text'>{company.lastModified} </span>
        </li>
      );
    })}
  </ul>
</aside>
