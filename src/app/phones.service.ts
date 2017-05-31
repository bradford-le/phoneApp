import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SessionService } from './session.service'
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {

  constructor( 
  	private http: Http,
  	private session: SessionService
   ) { }

  getList() {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get('http://localhost:3000/api/phones', options)
  		.map( (res) => res.json() )
  }

  get(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`http://localhost:3000/api/phones/${id}`, options)
  		.map((res) => res.json() );
  }

  add(phone) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:3000/api/phones', phone, options)
  		.map((res) => res.json())
  }

  edit(phone) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.put(`http://localhost:3000/api/phones/${phone._id}`, phone, options)
  		.map( (res) => res.json());
  }

  remove(id) {
  	let headers = new Headers({ 'Authorization': 'JWT ' + this.session.token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.delete(`http://localhost:3000/api/phones/${id}`, options)
  		.map( (res) => res.json());
  }

}
