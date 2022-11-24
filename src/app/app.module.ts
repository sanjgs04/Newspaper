import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Components/homepage/homepage.component';


import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AdverComponent } from './Components/adver/adver.component';
import { DialogComponent } from './Components/dialog/dialog.component';
import { CdialogComponent } from './Components/custDialog/cdialog/cdialog.component';
import { CustomerAdDtailsComponent } from './Components/customer-ad-datails/customer-ad-datails.component';
import { NgToastModule } from 'ng-angular-popup';
import { FeedbackComponent } from './Components/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
  AdminLoginComponent,
  LoginComponent,
  SignupComponent,
    HomepageComponent,
    ContactusComponent,
    PaymentComponent,
    AdverComponent,
    DialogComponent,
    CdialogComponent,
    CustomerAdDtailsComponent,
    FeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }