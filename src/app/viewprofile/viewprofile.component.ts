import { Component, OnInit } from '@angular/core';
import { logclass } from '../loginpage/logclass';
import { SignupserService } from '../service/signupser.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  constructor(public _upt:SignupserService,private _abc:Router,public rout:ActivatedRoute) { }
  public email_id:string;
  public password:string;
  public user_name:string;
  public mobile_no:string;
  public city:string;
  public gender:string;
  public address:string;

arr:logclass[]=[]

  UPDATE(){
   this._abc.navigate(['edit',this.email_id]);
  }
  onBack(){
    this._abc.navigate(['']);
  }
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

}
