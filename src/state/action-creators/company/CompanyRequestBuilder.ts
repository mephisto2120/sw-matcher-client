import CompanySearchCriteria from 'state/action-creators/company/index';

export default class CompanyRequestBuilder {

  private static BASE_URL = 'http://localhost:8080/company/get?';

  private companySearchCriteria: CompanySearchCriteria;

  constructor(companySearchCriteria: CompanySearchCriteria) {
    this.companySearchCriteria = companySearchCriteria;
  }

  build() {
    let url: string = CompanyRequestBuilder.BASE_URL;
    if (this.companySearchCriteria.customerId !== undefined
        && this.companySearchCriteria.customerId != 0) {
      url = url + 'customerId=' + this.companySearchCriteria.customerId;
    }
    if (this.companySearchCriteria.name !== undefined
        && this.companySearchCriteria.name != '') {
      if (url.includes('?', 0)) {
        url = url + '&name=' + this.companySearchCriteria.name;
      } else {
        url = url + '?name=' + this.companySearchCriteria.name;
      }
    }

    return url;
  }
}
