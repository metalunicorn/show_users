import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


export interface LoginForm {
  email: string;
  password: string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login(loginForm: LoginForm) {
    return this.http.post<any>('/api/users/login', { email: loginForm.email, password: loginForm.password}).pipe(
      map((token) => {
        localStorage.setItem('show-users-token', token.access_token);
        return token;
      })
    )
  }
}
