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
  public twitterUser:any ;
  public countries:any = ["El Salvador","Honduras","Nicaragua","Costa Rica","Panamá"];
  


  public tyc:any; 
  


  userDataModel ={

    names : "",
    lastNames : "",
    country : "",
    email : "",
    phone : "",
    birthdate : "Ene 01, 2000",
    visa : "",
    twitterUser : "",
    tyc: ""
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
    
    $('.datepicker')
    .datepicker(
    {
      autoClose: true,
      yearRange: 100,
      maxYear:   2000,
      minYear:   1900,
      maxDate: new Date("Dec-31-2000"),
      defaultDate: new Date("Jan-01-2000"),
      i18n: {
      months:    [
                   'Enero',
                   'Febrero',
                   'Marzo',
                   'Abril',
                   'Mayo',
                   'Junio',
                   'Julio',
                   'Agosto',
                   'Septiembre',
                   'Octubre',
                   'Noviembre',
                   'Diciembre'
                  ],
      monthsShort:['Ene',
                   'Feb',
                   'Mar',
                   'Abr',
                   'May',
                   'Jun',
                   'Jul',
                   'Ago',
                   'Sep',
                   'Oct',
                   'Nov',
                   'Dic'
                  ],
      weekdays:   [
                   'Domingo',
                   'Lunes',
                   'Martes',
                   'Miércoles',
                   'Jueves',
                   'Viernes',
                   'Sábado'
                  ],
      weekdaysShort:[
                     'Dom',
                     'Lun',
                     'Mar',
                     'Mié',
                     'Jue',
                     'Vie',
                     'Sáb'],
      weekdaysAbbrev: ['D',
                       'L',
                       'M',
                       'M',
                       'J',
                       'V',
                       'S'
                       ],
      cancel:         'Cancelar'
    }
    });

  });

  }

  async twitterPopUpTs(){
    console.log("ts") 
    let twitterObj = new twitterFunctions();
    
    let self = this;
     let res = twitterObj.init().then(function(resolveOutput) {
      console.log(resolveOutput)
      if(resolveOutput[0].loginState == "true"){
        console.log(resolveOutput)  
       
        self.loggedTwitterUser = true;
        
        self.twitterUser = "@"+resolveOutput[0].userName;

        self.userDataModel.twitterUser = "@"+resolveOutput[0].userName;
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



     this.request.post('webform_rest/submit',{
       "webform_id": "registro",
       "names":this.userDataModel.names,
       "lastnames":this.userDataModel.lastNames,
       "country":this.userDataModel.country,
       "email":this.userDataModel.email,
       "phone":this.userDataModel.phone,
       "birthdate":this.userDataModel.birthdate,
       "visa":this.userDataModel.visa,
       "twitter_user":this.userDataModel.twitterUser
     }).subscribe((res)=>{
      
        console.log(res,"post response")
     });
    

    console.log(this.userDataModel)
    //   let formData = {
          
    //   }
    //console.log(this.names,"names")
  }
    
    
  
  
  

}
