import axios from 'axios';
import {Dispatch} from 'redux';
import {SearchCompaniesActionType} from 'state/action-types/company';
import {Company} from 'model/interfaces';
import {CompaniesAction} from 'state/actions/company';
import CompanyRequestBuilder from 'state/action-creators/company/CompanyRequestBuilder';

interface CompanySearchCriteria {
  customerId: number;
  name: string
}

export default CompanySearchCriteria;

export const searchCompanies = (companySearchCriteria: CompanySearchCriteria) => {
  return async (dispatch: Dispatch<CompaniesAction>) => {
    dispatch({
      type: SearchCompaniesActionType.SEARCH_COMPANIES
    });

    try {
      const companyRequestBuilder: CompanyRequestBuilder = new CompanyRequestBuilder(companySearchCriteria);
      console.log('requestedUrl' + companyRequestBuilder.build())
      const {data} = await axios.get(companyRequestBuilder.build()
        // 'http://localhost:8080/company/get',
        // {
        //   params: {
        //     customerId: companySearchCriteria.customerId,
        //     name: companySearchCriteria.name
        //   },
        // }
      );

      const companies: Company[] = data.map((company: Company) => {
        return company;
      });

      dispatch({
        type: SearchCompaniesActionType.SEARCH_COMPANIES_SUCCESS,
        payload: companies
      });
    } catch (err) {
      const errorMessage = err.response && err.response.status && err.response.status === 404 ?  'No company found' : err.message;
      dispatch({
        type: SearchCompaniesActionType.SEARCH_COMPANIES_ERROR,
        payload: errorMessage
      });
    }
  };
};