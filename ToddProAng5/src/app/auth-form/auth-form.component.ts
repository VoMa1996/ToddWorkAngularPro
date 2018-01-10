import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthForm } from './auth-form.interface';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  // submitted: boolean = false;

  @Output() submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  // rememberMe: boolean = false;
  //
  // rememberUser(remember: boolean){
  //   this.rememberMe = remember;
  // }

  onSubmit(user: string) {
    this.submitted.emit(user);
    // console.log(t)
  }

  ngOnInit() {

  }

}
