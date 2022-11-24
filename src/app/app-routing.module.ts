import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdverComponent } from './Components/adver/adver.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { CustomerAdDtailsComponent } from './Components/customer-ad-datails/customer-ad-datails.component';
import { Feedback } from './Components/Customer-dash board.model';
import { DialogComponent } from './Components/dialog/dialog.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';

import { HomepageComponent } from './Components/homepage/homepage.component';
import { LoginComponent } from './Components/login/login.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'payment',component:PaymentComponent},
  {path:'adver',component:AdverComponent},
  {path:'custAdDetails',component:CustomerAdDtailsComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
