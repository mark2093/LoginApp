import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as AuthActions from '../store/auth.actions';
import * as fromApp from '../store/auth.reducers';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService} from '../authentication.service';
//import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { LogIn } from '../store/auth.actions';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup ({ email: new FormControl(), password: new FormControl()});
  submitted = false;
  user: User = new User();

  constructor(private formBuilder: FormBuilder, 
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {

    this.loginform = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.minLength(6), Validators.maxLength(20)]]
  });
  }

  get email() { return this.loginform.get('email')!; }

  get password() { return this.loginform.get('password')!; }

  onLogin() {
    this.submitted = true;
    console.log(this.loginform);
    if(this.loginform.status === 'VALID') {
      const payload = {
        email: this.loginform.value.email,
        password: this.loginform.value.password
      };
      //this.store.dispatch(new LogIn(payload));
      // this.authenticationService.login(this.loginform.value.email, this.loginform.value.password).pipe().subscribe(data => {
      //     this.router.navigate(['/home']);  //Navigate to home after successful login
      //   },error => {
      //     //log error
      // });
    }
    }

}
