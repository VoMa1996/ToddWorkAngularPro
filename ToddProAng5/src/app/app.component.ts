import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { AuthForm } from './auth-form/auth-form.interface';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthFormComponent } from './auth-form/auth-form.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit{

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  rememberMe: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    // console.log(component.instance);
    this.component.instance.title = "Create Account";
    this.component.instance.submitted.subscribe(this.loginUser);

  }

  destroyComponents() {

    this.component.destroy();

  }

  loginUser(user) {
    console.log("Login", user);
    // console.log("Login", user, this.rememberMe);
  }
  // rememberUser(remember: boolean){
  //   this.rememberMe = remember;
  // }

  // test(user: AuthForm) {
  //   console.log("test", user.password);
  // }

  // createUser(user: AuthForm) {
  //   console.log("Create User", user);
  // }


}
