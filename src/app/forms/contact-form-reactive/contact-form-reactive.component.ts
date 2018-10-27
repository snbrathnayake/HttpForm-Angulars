import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrls: ['./contact-form-reactive.component.css']
})

export class ContactFormReactiveComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.connotContainSpace,
    ],UsernameValidators.shouldBeQnique),
    
    password: new FormControl('', Validators.required),
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
