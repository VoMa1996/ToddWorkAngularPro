import { Component, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

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
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  rememberMe: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit(){

    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Volodymyr Maliarov',
      location: 'Poland, PL'
    });

    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // this.entry.createComponent(authFormFactory);
    this.entry.createComponent(authFormFactory).instance.submitted.subscribe(this.loginUser);

    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.submitted.subscribe(this.loginUser);
    this.component = this.entry.createComponent(authFormFactory, 1);
    // console.log(component.instance);
    this.component.instance.title = "Create Account";
    this.component.instance.submitted.subscribe(this.loginUser);

  }

  destroyComponents() {
    this.component.destroy();
  }

  moveComponents() {
    this.entry.move(this.component.hostView, 1);
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
