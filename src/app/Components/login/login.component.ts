import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/shared/api.service';
import { CustomerModel } from '../Customer-dash board.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;
  public loginobj =new CustomerModel();
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash"; 

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private api:ApiService,private toast:NgToastService) { }
  
  hideshowpass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon= "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type =  "text" : this.type = "password";
 }
  
  login() {
    console.log(this.loginForm)

    this.http.post('http://localhost:49110/api/Customer/login', this.loginForm.value, { responseType: 'text' }).subscribe(users => {
      console.log(users)
      if (users == "Login Successfull")
       {
        this.toast.success({detail:"Success",summary:"Logged in Successfully",duration:5000})
        this.router.navigate(['custAdDetails']);        
      }              
     },
     error=>{
      if(error){
        console.log(error);
        this.toast.error({detail:"Wrong Inputs",summary:"Enter Valid Inputs",duration:5000})
      }
    }    
    );   
  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],      
    })
  }
}




