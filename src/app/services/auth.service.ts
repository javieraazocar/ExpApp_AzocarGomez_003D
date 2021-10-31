import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string;
  password: string;
  loggedIn: boolean;
  url = 'https://localhost:8080/iniciosesion';

  constructor() { 
    this.email = '';
    this.loggedIn = false;
  }

  
}
