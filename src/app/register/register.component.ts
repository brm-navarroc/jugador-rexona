import { Component, OnInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.displaySelect();
  }
  
  displaySelect(){
 
	$('select').formSelect();

    $('.datepicker').datepicker();

  }
  

}
