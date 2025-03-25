import { Component, EventEmitter, Output, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('f') myForm = NgForm;
  
  f ={
    email : "",
    password : "",
  }

  loginSuccessful = "false"
  onFormSubmit(f:any){
    console.log(f.value)
    if(f.value.email === "admin@gmail.com" && f.value.password === "password"){
      this.loginSuccessful = "true"
      alert("Login Successful!")
    }
    else
      alert("Wrong Credentials!")
  }

  @Output() messageEvent = new EventEmitter<string>();  
  
  sendUpdate() {  
    this.messageEvent.emit(this.loginSuccessful); 
  }

}
