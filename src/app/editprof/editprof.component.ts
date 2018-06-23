import { Component, OnInit } from '@angular/core';

import { logclass } from '../loginpage/logclass';
import { SignupserService } from '../service/signupser.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editprof',
  templateUrl: './editprof.component.html',
  styleUrls: ['./editprof.component.css']
})
export class EditprofComponent implements OnInit {

  constructor(public _upt:SignupserService,private _abc:Router,public rout:ActivatedRoute) { }
  public email_id:string;
  public password:string;
  public user_name:string;
  public mobile_no:string;
  public city:string;
  public gender:string;
  public address:string;
  arr:logclass[]=[];
  ngOnInit() {

    this.email_id = this.rout.snapshot.params['email_id'];
    this._upt.databyid(this.email_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.arr=data;
        this.password=data[0].password;
        this.user_name=data[0].user_name;
        this.mobile_no=data[0].mobile_no;
        this.city=data[0].city;
        this.gender=data[0].gender;
        this.address=data[0].address;

      }
    )
  }
onsave(){
  this._upt.update(new  logclass(this.email_id,this.password,this.user_name,this.mobile_no,this.city,this.gender,this.address)).subscribe(
    (data:any)=>{
      console.log(data);
      this._abc.navigate(['']);
    }
  );


}
onChange(){
  this._abc.navigate(['check']);

}
}
