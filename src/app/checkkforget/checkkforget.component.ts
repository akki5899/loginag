import { Component, OnInit } from '@angular/core';

import { logclass } from '../loginpage/logclass';
import { SignupserService } from '../service/signupser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkkforget',
  templateUrl: './checkkforget.component.html',
  styleUrls: ['./checkkforget.component.css']
})
export class CheckkforgetComponent implements OnInit {
  public email_id:string;
  public password:string;
  arr:logclass[]=[]
  constructor(public _log:SignupserService,private _abc:Router) { }


  ngOnInit() {
  }
onForget(){

  this._log.login(new logclass(this.email_id,this.password)).subscribe(
    (data:any)=>{
      console.log(data);
      if (data.length>=1)
      {
        this._abc.navigate(['forget',this.email_id]);

      }
      else
      {
        alert("your Email Id or Passwod is Incorect");
      }
    }
  )


}
}
