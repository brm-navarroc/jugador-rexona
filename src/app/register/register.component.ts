import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { FormsModule }   from '@angular/forms';

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
  


  public tyc:any; 
  

  userDataModel ={

    names : "asd",
    lastNames : "asdasd",
    country : "asdasd",
    email : "asdasd",
    phone : "asdasd",
    birthdate : "asdasd",
    visa : "asdasd",
    twitterUser : "",
    tyc: null
  }

  constructor(private request: RequestService) { }


  ngOnInit() {
    //this.displaySelect();  
    this.loggedTwitterUser = false;
    this.twitterUser = "@usuario";
    
  }
  
  displaySelect(){
  
	$('select').formSelect();

  $(document).ready(function(){
    
    $('.datepicker').datepicker();
  });

  }

  async twitterPopUpTs(){
    console.log("ts") 
    let twitterObj = new twitterFunctions();
    
    let self = this;
     let res = twitterObj.init().then(function(resolveOutput) {
      console.log(resolveOutput)
      if(resolveOutput[0].loginState == "true"){
        console.log("if")  
       
        self.loggedTwitterUser = true;
        self.twitterUser = "@"+resolveOutput[0].userName;
        self.displaySelect();
        } 
  }, function(rejectOutput) {
      console.log(rejectOutput);
  });


  console.log(this.loggedTwitterUser,"logged")
    
      
     
  }
  
  postForm(){

    // let names, lastNames, country, email, phone, birthdate, visa, twitterUser;

    // names = $("#first_name").val();
    // lastNames = $("#last_name").val();
    // country = $("#form-country").val();
    // email = $("#form-mail").val();
    // phone = $("#form-phone").val();
    // birthdate = $("#form-birthdate").val();
    // visa = $("#form-visa").val();
    // twitterUser = $("#form-twitter-user").val();



    // this.request.post('webform_rest/submit',{
    //   "webform_id": "registro",
    //   "names": names,
    //   "lastnames": lastNames,
    //   "country": country,
    //   "email": email,
    //   "phone":phone,
    //   "birthdate":birthdate,
    //   "visa":visa,
    //   "twitter_user":twitterUser
    // }).subscribe((res)=>{
      
    //    console.log(res,"post response")
    //  });
    

    // console.log(names)
    //   let formData = {
          
    //   }
    //console.log(this.names,"names")
  }
    
    
  
  
  

}
