import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // @Input() messageLogin : string = ''

  @ViewChild('f') myForm = NgForm;
  
  f ={
    email : "",
    password : "",
  }

  
  onFormSubmit(f:any){
    console.log(f.value)
    // if(f.value.email === "admin@gmail.com" && f.value.password === "password"){
    //   alert("Login Successful!")
    // }
    // else
    //   alert("Wrong Credentials!")

    let email1 = f.value.email
    let password1 = f.value.password
    console.log(email1);
    let password2 = localStorage.getItem(email1.email);

    if(password1.password == password2){
      alert("Login Successful!") 
      window.open('dashboard')
    }
    else
      alert("Wrong Credentials!")


  }

  // -----Sharing data to parent using event emitter

  // @Output() messageEvent = new EventEmitter<boolean>();

  // sendUpdate(){
  //   if(this.loginSuccessful == "true")
  //     this.messageEvent.emit(true)
  //   else
  //     this.messageEvent.emit(false)

  // }

}
