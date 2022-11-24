import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
//import { passwordMatch } from 'src/app/validators/passwordMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  signUpFrom!: FormGroup;
  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router) {}
 
  ngOnInit(): void {
    this.signUpFrom = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],      
      username: ['',Validators.required],
      emailId: ['',Validators.compose([Validators.required,Validators.email])],
      password:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$')]],
      confirmPassword:['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$')]]
    },
    //[ passwordMatch("password", "confirm_password")]
  )
        
  }
  
  hideshowpass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type =  "text" : this.type = "password";
  }

  onSingup(){
    if(this.signUpFrom.valid){
      console.log(this.signUpFrom.value)  
      this.auth.signup(this.signUpFrom.value)
      .subscribe({
        next:(res)=>{
          alert("Succssfully Registered")
          this.signUpFrom.reset();
          this.router.navigate(['/login']);
        },
        error:(err)=>{
          alert("Something went wrong")
        }
      })  
    }else{      
      this.validateAllFromFileds(this.signUpFrom);
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
  getControl(name: any): AbstractControl | null {
    return this.signUpFrom.get(name)
  }
  registerFn(){
    console.log(this.signUpFrom)
  }
}


