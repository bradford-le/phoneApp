import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PhonesService {

  constructor( private http: Http ) { }

  getList() {
  	return this.http.get('http://localhost:3000/api/phones')
  		.map( (res) => res.json() )
  }

  get(id) {
  	return this.http.get(`http://localhost:3000/api/phones/${id}`)
  		.map((res) => res.json() );
  }

  add(phone) {
  	return this.http.post('http://localhost:3000/api/phones', phone)
  		.map((res) => res.json())
  }

  edit(phone) {
  	return this.http.put(`http://localhost:3000/api/phones/${phone._id}`, phone)
  		.map( (res) => res.json());
  }

  remove(id) {
  	return this.http.delete(`http://localhost:3000/api/phones/${id}`)
  		.map( (res) => res.json());
  }

}
