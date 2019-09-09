import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export class User{
  status:string;
  constructor(){

  }
}

export class JwtResponse{
  jwtToken:string;
  constructor(){
    
  }
}
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(username, password){
    const head = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<any>('/api/authenticate', {username,password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    )
  }

  register(username, password){

  }

  isUserLoggedIn(){
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
  }
}
