import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;



  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(5)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  onSubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm?.invalid) {
      return;
    }

    this.authService.login(this.loginForm?.value).pipe(
      map(token => this.router.navigate(['admin']))
    ).subscribe()
  }

}
