import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupserService } from '../service/signupser.service';
import { logclass } from '../loginpage/logclass';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  constructor(public _upt:SignupserService,private _abc:Router,public rout:ActivatedRoute) { }
  email_id:string;
  oldpassword:string;
  newpassword:string;
  confirmpassword:string;
  ngOnInit() {
    this.email_id = this.rout.snapshot.params['email_id'];
  }
  change(){
    this._upt.databypass(this.oldpassword).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>=1)
        {

                if(this.newpassword==this.confirmpassword)
                {
                    this._upt.updatepass(new  logclass(this.email_id,this.newpassword)).subscribe(
                      (data:any)=>{
                          console.log(data);
                          this._abc.navigate(['']);}
                       );
                }
                else
                {
                    alert("check new password and conferm password");
                }
        }
      }
    )
}
onBack(){
  this._abc.navigate(['']);

}
}
