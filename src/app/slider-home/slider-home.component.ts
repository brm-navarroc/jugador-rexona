import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

declare var $:any;

declare var M:any;

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss']
})
export class SliderHomeComponent implements OnInit {

  constructor(private requestService: RequestService) { 
    
  }

  ngOnInit() {
  	this.slider();
    this.autoplay();
    this.getData();
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

    getData(){
      this.request.get('getPlayers').subscribe((res)=>{
        console.info("hi", res);
        });


      /*let resultData = null;
      this.requestService.get('getPlayers',null,null).subscribe((res)=>{
        resultData = res;

        console.log(resultData)
        // this.error = false;			
      },(err)=>{
        // this.error = true;			
      },()=>{
        // if(!this.error){
        //   this.cities = ciudades;	
        // }
        console.log(resultData)
      });*/
    }
}
