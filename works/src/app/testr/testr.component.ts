import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-testr',
  templateUrl: './testr.component.html',
  styleUrls: ['./testr.component.css'],
})
export class TestrComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signUp = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
    ]),
  });

  validateForm() {
    console.log(this.signUp.value);
    localStorage.setItem('UserForm', JSON.stringify(this.signUp.value));
  }

  get email() {
    return this.signUp.get('email');
  }
  get user() {
    return this.signUp.get('user');
  }
  get password() {
    return this.signUp.get('password');
  }
}
