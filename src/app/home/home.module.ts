import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'; // Adjust the path accordingly

@NgModule({
  
  imports: [
    CommonModule,
    HomeComponent 
  ],
  exports: [HomeComponent] // Export HomeComponent
})
export class HomeModule { }