import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';

@Injectable()
export class CompanyService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  getCompanies() {
    return this._tokenService.get('companies').map(res => res.json());
  }

  getCompany(company_id) {
    return this._tokenService.get('companies/' + company_id).map(res => res.json());
  }

  createCompany(company_params) {
    return this._tokenService.post('companies', company_params).map(res => res.json());
  }

  updateCompany(company_id, company_params) {
    return this._tokenService.put('companies/' + company_id, company_params).map(res => res.json());
  }

  destroyCompany(company_id) {
    return this._tokenService.delete('companies/' + company_id).map(res => res.json());
  }
}