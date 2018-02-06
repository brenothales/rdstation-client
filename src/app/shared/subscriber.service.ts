import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class SubscriberService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  createSubscriber(product_id, subscriber) {
    return this._tokenService.post('subscribers', {product_id: product_id, subscriber}).map(res => res.json());
  }

  updateSubscriber(subscriber_id, subscriber_params) {
    return this._tokenService.put('subscribers/' + subscriber_id, subscriber_params).map(res => res.json());
  }

  destroySubscriber(subscriber_id) {
    return this._tokenService.delete('subscribers/' + subscriber_id).map(res => res.json());
  }
}