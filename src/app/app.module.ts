import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'; // Import HomeModule
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppComponent // Import HomeModule here
  ],
  
  providers: [],
  bootstrap: []
})
export class AppModule { }