import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit { 
  categoryList =["General","Health","Vehicles","Electronics","Shopping","Politics","Entertainment","Sports"]
  advertismentForm!: FormGroup;
  actionBtn:string="Add";
  todayDate:Date = new Date();

  constructor(private formBuilder:FormBuilder, 
    private api:ApiService, 
    private dailogRef:MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData:any) { }
    
    ngOnInit(): void {
      this.advertismentForm=this.formBuilder.group({
        UserName:['',Validators.required],
        Ad_Title:['',Validators.required],
        Ad_Description:['',Validators.required],
        PageNumber:['',Validators.required],
        Category:['',Validators.required],
        DateOfPost:['',Validators.required],
        Price:['',Validators.required]
      })
      if(this.editData){
        this.actionBtn="Update";
        this.advertismentForm.controls['UserName'].setValue(this.editData.UserName);
        this.advertismentForm.controls['Ad_Title'].setValue(this.editData.Ad_Title);
        this.advertismentForm.controls['Ad_Description'].setValue(this.editData.Ad_Description);
        this.advertismentForm.controls['PageNumber'].setValue(this.editData.PageNumber);
        this.advertismentForm.controls['Category'].setValue(this.editData.Category);
        this.advertismentForm.controls['DateOfPost'].setValue(this.editData.DateOfPost);
      }
    }
  
  Add_details(){
   if(!this.editData){
    if(this.advertismentForm.valid){    
      this.api.postAdvertisment(this.advertismentForm.value)
      .subscribe({
        next:(res)=>{
          alert("Details Added Successfylly")
          this.advertismentForm.reset();
          this.dailogRef.close('Detailes Added');
        },
        error:()=>{
          alert("error while adding")
        }
      })}
    }else{
      this.updateAdvertisment()
    }
  }
  updateAdvertisment(){
    this.api.updateAdvertisment( this.advertismentForm.value,this.editData.Ad_Id)
    .subscribe(res=>{   
        alert("details Updated Successfylly")
        this.advertismentForm.reset();
        this.dailogRef.close("updated");        

   })}
  // updateAdvertisment(){
  //  this.api.updateAdvertisment(this.advertismentForm.value,this.editData.Ad_ID)
  //   .subscribe({
  //     next:(res)=> {
  //       alert("details Updated Successfully")
  //       this.advertismentForm.reset();
  //       this.dailogRef.close('update');            
  //     },
  //     error:()=>{
  //       alert("something went wrong")
  //     }        
  //   })
  // }
  
}
