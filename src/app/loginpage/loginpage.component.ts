import { Component, OnInit } from '@angular/core';
import { logclass } from './logclass';
import { SignupserService } from '../service/signupser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public email_id:string;
  public password:string;
  arr:logclass[]=[]
  constructor(public _log:SignupserService,private _abc:Router) { }
  ngOnInit() {
  }
  login(){

    this._log.login(new logclass(this.email_id,this.password)).subscribe(
      (data:any)=>{
        console.log(data);
        if (data.length>=1)
        {
          this._abc.navigate(['view',this.email_id]);
        }
        else
        {
          alert("your Email Id or Passwod is Incorect");
        }
      }
    )
  }
  signup(){
    this._abc.navigate(['signup']);
  }
 onForget(){
  this._abc.navigate(['check']);

 }

}
