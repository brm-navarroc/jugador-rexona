import { Component, OnInit } from '@angular/core';

declare var $:any
declare var twitterFunctions: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  
  public loggedTwitterUser:any;
  public twitterUser:any;

  constructor() { }


  ngOnInit() {
    this.displaySelect();  
    this.loggedTwitterUser = false;
    this.twitterUser = "@usuario";
    
  }
  
  displaySelect(){
 
	$('select').formSelect();

    $('.datepicker').datepicker();

  }

  async twitterPopUpTs(){
    console.log("ts") 
    let wegObj = new twitterFunctions();
    
  //   let res = wegObj.init().then(function(resolveOutput) {
  //     console.log(resolveOutput,"succes data");
  // }, function(rejectOutput) {
  //     console.log(rejectOutput);
  // });
    // setTimeout(() => {
    //  console.log(res,"in ts")
    // }, (3000));
    let self = this;
     let res = wegObj.init().then(function(resolveOutput) {
      console.log(resolveOutput)
      if(resolveOutput[0].loginState == "true"){
        console.log("if")  
        self.loggedTwitterUser = true;
        self.twitterUser = "@"+resolveOutput[0].userName;
         
      } 
  }, function(rejectOutput) {
      console.log(rejectOutput);
  });


  console.log(this.loggedTwitterUser,"logged")
    
      
     
  }
    
    
    
  
  
  

}
