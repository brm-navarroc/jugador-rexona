import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit {

  constructor() { }

  public mobil:boolean = false;

  ngOnInit() {
  	
  	this.OnLoad();
  }


	onResize(){
		this.OnLoad();
	}

  slider(){
  	console.info($('.carousel.carousel-slider').length);
	$('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true,
	  })
  }

/*
  autoplay() { 
	  	//$('.carousel.carousel-slider')
	  	//setInterval(this.autoplay, 5000);
      $('.carousel.carousel-slider').carousel('next');
      setInterval(this.autoplay, 5000);
	  }
*/
OnLoad(){
	var wSize = $( window ).width();

	if (wSize < 720) {
		this.mobil = true;
	}
	else{
		this.mobil = false;
	}
	let this_ = this;
	setTimeout(function(){
		this_.slider();
	},0);
}

}
