import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

const routes: Routes = [
	{ path: '', redirectTo: '/Inicio', pathMatch: 'full' },
  	{ path: 'Inicio', component: SliderHomeComponent },
  	{ path: 'Como-jugar', component: HowToPlayComponent }
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
