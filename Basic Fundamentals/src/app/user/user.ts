import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  user : {name:string,email:string} = {
    name:"singh",
    email:''
  };

submtiForm(userForm: NgForm){
  if(userForm.valid){
  console.log("userForm: ",userForm.value, this.user);
  }

}

validateEmail() : boolean{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(this.user.email);
}

}
