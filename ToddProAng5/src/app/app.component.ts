import { Component } from '@angular/core';

import { AuthForm } from './auth-form/auth-form.interface';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  rememberMe: boolean = false;


  rememberUser(remember: boolean){
    this.rememberMe = remember;
  }

  test(user: AuthForm) {
    console.log("test", user.password);
  }

  createUser(user: AuthForm) {
    console.log("Create User", user);
  }

  loginUser(user: AuthForm) {
    console.log("Login", user, this.rememberMe);
  }
}
