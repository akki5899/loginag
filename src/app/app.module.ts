import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { CheckkforgetComponent } from './checkkforget/checkkforget.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { EditprofComponent } from './editprof/editprof.component';
import { Router,RouterModule } from '@angular/router';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignuppageComponent,
    ViewprofileComponent,
    CheckkforgetComponent,
    ForgetpassComponent,
    EditprofComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
