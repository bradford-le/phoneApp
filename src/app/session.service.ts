import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService implements CanActivate {
	public token: string = '';
	public isAuth: boolean = false;
	public user = {};

	private BASE_URL: string = 'http://localhost:3000';

  constructor(
  	private http: Http,
  	private router: Router
  ) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
  	if (localStorage.getItem('token')) {
  		// this.session.isAuth = true;
  		// this.session.user = JSON.parse(localStorage.getItem('user'))
  		console.log('canActivate token ', localStorage.getItem('token'))
  		let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('token') });
  		let options = new RequestOptions({ headers: headers });
  		return this.http.get(`${this.BASE_URL}/token`, options)
  			.map((data) => {
  				if (data) {
  					console.log('canActivate data: ', data);
  					this.isAuth = true;
  					this.token = localStorage.getItem('token');
  					// return true;
  					return true;
  				}
  				this.logout()
  				this.router.navigate(['/login']);
  				return false
  			});
  	}else{
  		this.isAuth = false;
  		this.router.navigate(['/login']);
  		return false
  	}
    // if (this.isAuth) {
    //   // logged in so return true\
    //   // this.token = localStorage.getItem('token');
    //   // this.user = JSON.parse(localStorage.getItem('user'));
    //   // this.isAuth = true;
    //   return true;
    // }
    // // not logged in so redirect to login page
    // this.router.navigate(['/login']);
    // // this.isAuth = false;
    // return false;
  }

  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user)
        .map((res) => res.json())
        .map((res) => {
        	let token = res.token;
        	let user = res.user;

        	if (token) {
        	  // set token property
        	  this.token = token;
        	  this.user = {
        	  	_id: user._id,
        	  	username: user.username
        	  }
        	  console.log('token: ', token);
        	  console.log('user: ', this.user);

        	  this.isAuth = true;
        	  // store username and jwt token in local storage to keep user logged in between page refreshes
        	  localStorage.setItem('token', token );
        	  localStorage.setItem('user', JSON.stringify(this.user) );
        	  // return true to indicate successful login
        	  return true;
        	} else {
        	  // return false to indicate failed login
        	  return false;
        	}
        })
        
  }

  isTokenValid(token){
  	let headers = new Headers({ 'Authorization': 'JWT ' + token });
  	let options = new RequestOptions({ headers: headers });
  	return this.http.get(`${this.BASE_URL}/token`, options)
  		.map((res) => res.json())
  }

  logout() {
  	this.token = null;
  	this.user = null;
  	this.isAuth = false;
  	localStorage.removeItem('token');
  	localStorage.removeItem('user');
  	this.router.navigate(['/login']);
  }
}	
