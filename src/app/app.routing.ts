import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { EditprofComponent } from './editprof/editprof.component';
import { CheckkforgetComponent } from './checkkforget/checkkforget.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { Router,RouterModule } from '@angular/router';

const abc =[
  {path:'',component:LoginpageComponent},
  {path:'signup',component:SignuppageComponent},
  {path:'forget/:email_id',component:ForgetpassComponent},
  {path:'edit/:email_id',component:EditprofComponent},
  {path:'check',component:CheckkforgetComponent},
  {path:'view/:email_id',component:ViewprofileComponent}
];
export const routing = RouterModule.forRoot(abc);
