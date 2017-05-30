import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
	phone = {
		brand: '',
		image: 'http://placehold.it/350x150',
		name: '',
		specs: []
	};
	spec = '';

  constructor(
  	private phoneAPI: PhonesService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(){
  	this.phoneAPI.add(this.phone)
  		.subscribe((res)=>{
  			console.log(res)
  			this.router.navigate(['/phones'])		
  		})
  	console.log(this.phone)
  }

  addSpec() {
  	this.phone.specs.push(this.spec)
  	this.spec = ''
  }

}
