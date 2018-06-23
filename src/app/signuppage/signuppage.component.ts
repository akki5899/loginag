import { Component, OnInit } from '@angular/core';
import { logclass } from '../loginpage/logclass';
import { SignupserService } from '../service/signupser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private _sig:SignupserService,private _abc:Router) { }

  public email_id:string;
  public password:string;
  public user_name:string;
  public mobile_no:string;
  public city:string;
  public gender:string;
  public address:string;

  ngOnInit() {
  }
  onsignup(){

    this._sig.signup(new logclass(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
      (data:any)=>{
        console.log(data);
        this._abc.navigate(['']);
      }
    )

  }
  onBack(){
    this._abc.navigate(['']);

  }

}
