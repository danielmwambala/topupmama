import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { LoginModel } from './login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  loginModelObj : LoginModel = new LoginModel();

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login(){
    this.loginModelObj.email = this.loginForm.value.email;
    this.loginModelObj.password = this.loginForm.value.password;

    this.api.userLogin(this.loginModelObj).subscribe(res =>{
      alert("Logged in successfully");   
      this.loginForm.reset();
      this.router.navigate(['dashboard'])
    },
    error=>{
      alert(error.error.error);          
    })
  }

}
