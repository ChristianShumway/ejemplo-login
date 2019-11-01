import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/users', {
      email: username,
      first_name: password,     
    });     
  }

}
