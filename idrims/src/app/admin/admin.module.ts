import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'; 

const routes: Routes = [  
  { path: 'admin', component: AdminComponent },  
]; 
@NgModule({
  imports: [
    CommonModule ,   
    BrowserModule,  
   // RouterModule.forRoot(routes) 
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
