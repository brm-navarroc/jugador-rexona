import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  constructor(private request: RequestService) { }
  _allPlayers:any;
  _semanalPlayers:any;
  _semanalPlayersSearch:any;

  numbers:number[] = new Array(); 

  ngOnInit() {
  	this.weekPlayers();
  }

  weekPlayers(){
      this.request.get('getPlayersDb').subscribe((res)=>{
        this._semanalPlayers = res;
          this.searchWeeklyPlayers();
       });
 	}
   

   /* allPlayers(){
      this.request.get('getPlayers').subscribe((res)=>{
        //console.info("hi", res);
        this._allPlayers = res;
        this.weekPlayers();
      });
    }*/

    searchWeeklyPlayers(){  
        if ( this._semanalPlayers.length > 1 ){
          for (var i = 0; i <= this._semanalPlayers.length -1 ; i++) {
            //console.info(this._semanalPlayers[i].votes);
            var nm = parseInt(this._semanalPlayers[i].votes);
             this.numbers.push( nm );
          }
          //Math.max( this.numbers )
        }
        
    }

    calc(){

    }

}
