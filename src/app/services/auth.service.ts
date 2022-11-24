import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="http://localhost:49110/api/";

  constructor(private http : HttpClient) { }

  signup(userObj:any){
     return this.http.post<any>(`${this.baseUrl}Customer/Signup`,userObj)
  }
  
  adminlogin(adminloginObj:any){
    return this.http.post<any>(`${this.baseUrl}auth/login`,adminloginObj)
  }
}
