import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdialog',
  templateUrl: './cdialog.component.html',
  styleUrls: ['./cdialog.component.css']
})
export class CdialogComponent implements OnInit {categoryList =["General","Health","Vehicles","Electronics","Shopping","Politics","Entertainment","Sports"]
Price:any

advertismentForm!: FormGroup;
constructor(private formBuilder:FormBuilder, private api:ApiService,private router:Router, private dailogRef:MatDialogRef<CdialogComponent>) { }

ngOnInit(): void {
  this.advertismentForm=this.formBuilder.group({
    UserName:['',Validators.required],
    Ad_Title:['',Validators.required],
    Ad_Description:['',Validators.required],
    PageNumber:['',Validators.required],
    Category:['',Validators.required],
    DateOfPost:['',Validators.required],
  })
}
Add_details(){
  if(this.advertismentForm.valid){
    this.api.postAdvertisment(this.advertismentForm.value)
    .subscribe({
      next:(res)=>{
        alert("Details Added Successfylly")
        this.advertismentForm.reset();
        this.dailogRef.close('Detailes Added');
        this.router.navigate(['payment']);
      },
      error:()=>{
        alert("error while adding")
      }
    })
  }
}
  pay(){
    alert ("Payment Successful")
  }
}
