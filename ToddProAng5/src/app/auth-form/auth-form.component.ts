import { Component, OnInit, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {

  // submitted: boolean = false;
  showMessage: boolean;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      })
    }
  }

  // rememberMe: boolean = false;
  //
  // rememberUser(remember: boolean){
  //   this.rememberMe = remember;
  // }

  onSubmit(user: string) {
    this.submitted.emit(user);
    // console.log(t)
  }


}
