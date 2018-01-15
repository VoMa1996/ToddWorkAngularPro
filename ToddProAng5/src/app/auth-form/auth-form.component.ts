import { Component, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
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

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) =>   this.showMessage = checked); 

      // this.remember.checked.subscribe((checked: boolean) => {
      //   this.showMessage = checked;
      // })
    });
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
