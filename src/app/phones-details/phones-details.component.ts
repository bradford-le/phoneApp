import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.css']
})
export class PhonesDetailsComponent implements OnInit {
	phone = {
		_id: '',
		specs: [],
		image: ''
	};
	spec = '';

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private phoneAPI: PhonesService
  ) { }

  ngOnInit() {
  	this.route.params.subscribe((params) => {
  		this.getPhoneDetails(params.id);
  	})
  }

  getPhoneDetails(id) {
  	this.phoneAPI.get(id)
  		.subscribe((phone) => {
  			this.phone = phone;
  		})
  }

  addSpec(){
  	this.phone.specs.push(this.spec)
  }

  delete() {
  	this.phoneAPI.remove(this.phone._id)
  		.subscribe( () => {
  			this.router.navigate(['/phones'])
  		})
  }

  submitForm() {
  	this.phoneAPI.edit(this.phone)
  		.subscribe(() => {
  			console.log('update');
  		})
  }

}
