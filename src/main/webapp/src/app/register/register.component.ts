import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import {RegisterData} from '../models/register-data.model';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges, AfterContentChecked {

  userRegistration:RegisterData;
  passwordConfirm:String
  isPasswordConfirmed:Boolean;

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.userRegistration = new RegisterData();
  }

  ngOnChanges(){
   
    console.log('running');
  }
  ngAfterContentChecked(){
    console.log('checked');
    this.comparePasswords();
  }


  submitRegistration(userRegistration : RegisterData){
    //TODO: intergrate auth

    //try authenticate

    //if not, then try register

   
  }

  comparePasswords(){
    if(this.userRegistration.password !== this.passwordConfirm){
      this.isPasswordConfirmed = false;
    }else{
      this.isPasswordConfirmed = true;
    }
  }

}
