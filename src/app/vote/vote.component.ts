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
  max:any
  ngOnInit() {
  	this.weekPlayers();
  }

  weekPlayers(){
      this.request.get('getPlayersDb').subscribe((res)=>{
        this._semanalPlayers = res;
        //console.info(res);
          this.searchWeeklyPlayers();
       });
 	}
   
    searchWeeklyPlayers(){  
        if ( this._semanalPlayers.length > 1 ){
          if ( this._semanalPlayers.length == 2){
              this._semanalPlayers.push({
                votes:"0",
                hashtag:"#ninguno",
                image:"/assets/img/player-undefined.png",
                name:"Ninguno"
              })
          }
          for (var i = 0; i <= this._semanalPlayers.length -1 ; i++) {
            var nm = parseInt(this._semanalPlayers[i].votes);
             this.numbers.push( nm );
          }
          this.max = this.numbers.reduce(function(a, b) {
              return Math.max(a, b);
          });
          this._semanalPlayers.reverse()
        }
        
    }

    calc(nmbr:number){
      if ( isNaN(nmbr) == false ){
        let x =  (nmbr*95) / this.max;
        let t = 100 - x;

        return {'height': x+'%', 'top': t+"%" };
      }
    }

    tweetPopUp(playerHashTag){
        
        let noHash = playerHashTag.replace("#","")
        let w=window.open("https://twitter.com/intent/tweet?button_hashtag="+noHash+"&ref_src=twsrc%5Etfw",'w','width=300,height=300');
    }

}
