import { Component, OnInit } from '@angular/core';


declare var $:any;

declare var M:any;

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss']
})
export class SliderHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.slider();
  	this.autoplay();
}
  slider(){
  	
	$('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true,
	  })
  }
  autoplay() { 
	  	//$('.carousel.carousel-slider')
	  	//setInterval(this.autoplay, 5000);
      $('.carousel.carousel-slider').carousel('next');
      setInterval(this.autoplay, 5000);
	  }

  
}
