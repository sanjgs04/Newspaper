import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public cartItemList : any =[]
  registrationForm:any
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  Price:any
  constructor(private http:HttpClient, private fb:FormBuilder,private api:ApiService,private router:Router) {
    this.createRegistrationForm();    
   }

  createRegistrationForm(): void{
    this.registrationForm = this.fb.group({
      card_Name: ['',Validators.required],
      card_Number: ['',[Validators.required,Validators.pattern("^[0-9]{16}$")]],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      ex_Month:['',[Validators.required,Validators.pattern("^(0[0-9])|(1[0-2]){1}$")]],
      ex_Year:['',[Validators.required,Validators.pattern("^[0-9]{4}$")]],
      cvv:['',[Validators.required,Validators.pattern("^[0-9]{3}$")]],    
      Price:['',Validators.required], 
    });
}

  ngOnInit(): void {  

  }   

handleClear():void{
  this.registrationForm.reset();
}
payment()
{
  alert("Payment Successfull");
  this.router.navigate(['login'])
}
}

