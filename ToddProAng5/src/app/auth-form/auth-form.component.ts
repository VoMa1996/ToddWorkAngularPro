import { Component, ChangeDetectorRef, ViewChildren, AfterViewInit, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {

  // submitted: boolean = false;
  showMessage: boolean;
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.message) {
        this.message.forEach((itemMessage) => {
          itemMessage.days = 30;
        });
        this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {

    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) =>   this.showMessage = checked); 
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
