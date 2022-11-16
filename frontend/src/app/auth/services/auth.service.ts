import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>('/api/users/login', { email: email, password: password}).pipe(
      map((token) => {
        localStorage.setItem('show-users-token', token.access_token);
        return token;
      })
    )
  }
}
