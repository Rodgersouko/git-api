import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { HttpModule } from '@angular/http';

import { DataService } from '../app/data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from '../app/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
