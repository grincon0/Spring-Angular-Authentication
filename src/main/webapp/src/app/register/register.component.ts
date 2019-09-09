import { Component, OnInit, OnChanges } from '@angular/core';
import {RegisterData} from '../models/register-data.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

  userRegistration:RegisterData;
  passwordConfirmation:String
  isPasswordConfirmed:Boolean;

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.userRegistration = new RegisterData();
  }

  ngOnChanges(){
    this.comparePasswords();
  }

  submitRegistration(userRegistration : RegisterData){
    //TODO: intergrate auth

    //try authenticate

    //if not, then try register

   
  }

  comparePasswords(){
    if(this.userRegistration.password !== this.passwordConfirmation){
      this.isPasswordConfirmed = false;
    }else{
      this.isPasswordConfirmed = true;
    }
  }

}
