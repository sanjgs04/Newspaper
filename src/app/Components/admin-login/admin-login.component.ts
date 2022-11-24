import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

 
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  adminform!:FormGroup;
  adminForm: any;
  constructor(private fb:FormBuilder, private auth: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      adminId: ['',Validators.required],
      password: ['',Validators.required]
    })
  }


  hideshowpass(){
     this.isText = !this.isText;
     this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon = "fa-eye-slash";
     this.isText ? this.type =  "text" : this.type = "password";
  }

  onAdminlogin(){
    if(this.adminForm.valid){
      console.log(this.adminForm.value) 
      this.auth.adminlogin(this.adminForm.value)
      .subscribe({
        next:(res)=>{
          alert("Successfully Logged In")
          this.adminForm.reset();
          this.router.navigate(['adver'])
        },
        error:(err)=>{
          alert("Wrong Inputs")
        }
      })    
    }else{      
      this.validateAllFromFileds(this.adminForm);
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


