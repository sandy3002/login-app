import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgForm } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  template: `
    
  `,
  imports: [ HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login-app';

  // 1. Sharing data to child by passing variable (should be using signal)
  
  // loginSuccessful = false

  // messageToChild = "Hello kiddo"

  // handleUpdate(notification:boolean) {
    
  //   console.log(this.loginSuccessful);
  //   console.log(notification);
  //   this.loginSuccessful = notification
  //   console.log(this.loginSuccessful)
  // }
  
  


  
}
