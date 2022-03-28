import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { RegisterModel } from './register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  registerModelObj : RegisterModel = new RegisterModel();

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  register(){
    this.registerModelObj.email = this.registerForm.value.email;
    this.registerModelObj.password = this.registerForm.value.password;

    this.api.postUser(this.registerModelObj).subscribe(res =>{
      alert("Registered successfully");   
      this.registerForm.reset();
      this.router.navigate(['login'])
    },
    error=>{
      alert(error.error.error);          
    })
  }

}
