import { Component, ChangeDetectorRef, Renderer, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnInit, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthFormModule } from './auth-form.module';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(user) {
    this.submitted.emit(user);
    // console.log(t)
  }

  // submitted: boolean = false;
  // showMessage: boolean;
  // @ViewChild('email') email: ElementRef;
  // @ViewChild('password') password: ElementRef;

  // @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  // @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;



  // constructor(
  //   private renderer: Renderer,
  //   private cd: ChangeDetectorRef
  // ) {}

//   ngAfterViewInit() {

//     this.renderer.setElementAttribute(this.email.nativeElement, 'placeholder', 'test');
//     this.renderer.setElementClass(this.email.nativeElement, 'email', true);
//     this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');
//     // this.email.nativeElement.setAttribute('placeholder', ' Enter your email');
//     // this.email.nativeElement.classList.add('email');
//     // this.email.nativeElement.focus();


//     this.password.nativeElement.setAttribute('placeholder', ' Enter your password');

//     // console.log(this.password.nativeElement);

//     if (this.message) {
//         this.message.forEach((itemMessage) => {
//           itemMessage.days = 30;
//         });
//         this.cd.detectChanges();
//     }
//   }

//   ngAfterContentInit() {

//     if (this.remember) {
//       this.remember.forEach((item) => {
//         item.checked.subscribe((checked: boolean) =>   this.showMessage = checked); 
//     });
//   }
// }

  // rememberMe: boolean = false;
  //
  // rememberUser(remember: boolean){
  //   this.rememberMe = remember;
  // }



}
