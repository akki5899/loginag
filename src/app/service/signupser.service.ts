import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { logclass } from '../loginpage/logclass';
@Injectable({
  providedIn: 'root'
})
export class SignupserService {
  private url:string="http://localhost:3000/"
  constructor(public _http:HttpClient) { }

  signup(item:logclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"signup/",x,{headers:h})
  }

  login(item:logclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+"login/",x,{headers:h})
  }

  databyid(id){
    return this._http.get(this.url+"login/"+id);
  }
  databypass(id){
    return this._http.get(this.url+"signup/"+id);
  }

  update(item:logclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+"login/"+item.email_id,x,{headers:h})
  }

  updatepass(item:logclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+"signup/"+item.email_id,x,{headers:h})
  }
}
