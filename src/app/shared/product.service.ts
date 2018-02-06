import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class ProductService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  createProduct(company_id, product) {
    return this._tokenService.post('products', {company_id: company_id, product}).map(res => res.json());
  }

  updateProduct(product_id, product_params) {
    return this._tokenService.put('products/' + product_id, product_params).map(res => res.json());
  }

  destroyProduct(product_id) {
    return this._tokenService.delete('products/' + product_id).map(res => res.json());
  }
}