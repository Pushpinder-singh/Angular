import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user-service';
import { User } from './user';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
