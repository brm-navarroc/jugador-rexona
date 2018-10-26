import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavTopComponent } from './layout/nav-top/nav-top.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { RequestService } from './request.service';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    FooterComponent,
    SliderHomeComponent,
    HowToPlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
