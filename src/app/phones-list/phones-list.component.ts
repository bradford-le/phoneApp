import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css'],
})
export class PhonesListComponent implements OnInit {
	phones;

  constructor(private phoneAPI: PhonesService) { }

  ngOnInit() {
  	this.phoneAPI.getList()
  		.subscribe((phones) => {
  			this.phones = phones
  		})
  }

  getPhones() {
  	
  }
  
}
