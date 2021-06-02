import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import { Store } from '@ngrx/store';
// import * as AuthActions from '../store/auth.actions';
// import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup ({ email: new FormControl(), password: new FormControl()});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService,private router: Router) { }

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
    if(this.loginform.status === 'VALID'){
      // this.authenticationService.login(this.loginform.value.email, this.loginform.value.password).pipe().subscribe(data => {
      //     this.router.navigate(['/home']);  //Navigate to home after successful login
      //   },error => {
      //     //log error
      // });
    }
    }

}
