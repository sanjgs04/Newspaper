import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  feedbackFrom!: FormGroup;

  constructor(private fb:FormBuilder, private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.feedbackFrom = this.fb.group({
      Name: ['',Validators.required],
      Email: ['',Validators.compose([Validators.required,Validators.email])],   
      Subject: ['',Validators.required],
      Message: ['',Validators.required]
    })
  }
  postFeedbacks(){
    if(this.feedbackFrom.valid){
      console.log(this.feedbackFrom.value)  
      this.api.postFeedbacks(this.feedbackFrom.value)
      .subscribe({
        next:(res)=>{
          alert("Feedback sent Successfully")
          this.feedbackFrom.reset();
          this.router.navigate(['']);
        },
        error:(err)=>{
          alert("Something went wrong")
        }
      })  
    }else{      
      this.validateAllFromFileds(this.feedbackFrom);
      alert("Please Enter Valid Inputs")
    }    
  }      
  private validateAllFromFileds(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(filed=>{
      const control = formGroup.get(filed);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      }else if(control instanceof FormGroup){
        this.validateAllFromFileds(control)
      }
    })
  }

}
