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
}
