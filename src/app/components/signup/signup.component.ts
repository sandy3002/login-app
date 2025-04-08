import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

    // @Input() messageLogin : string = ''
  
    @ViewChild('f') myForm = NgForm;
    
    f ={
      fullname : "",
      email : "",
      password : "",
    }
  
    
    onFormSubmit(f:any){
      console.log(f.value)
      let data = f.value
      console.log(data);
      localStorage.setItem(data.email,data.password)
      alert('Sign up successful!')
    }
  
  
}
