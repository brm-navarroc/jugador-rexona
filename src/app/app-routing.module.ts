import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  	{ path: 'inicio', component: SliderHomeComponent },
  	{ path: 'como-jugar', component: HowToPlayComponent },
  	{ path: 'registro', component: RegisterComponent },
  	{ path: 'votar', component: VoteComponent }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
