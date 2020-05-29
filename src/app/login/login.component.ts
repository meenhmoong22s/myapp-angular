import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.formLogin = this.fb.group( {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.maxLength(25), Validators.minLength(8), Validators.pattern('[a-zA-Z ]*')]],
      re: false,
    });
  }
  onSubmit()
  {
    console.log(this.formLogin.value);
  }

}
