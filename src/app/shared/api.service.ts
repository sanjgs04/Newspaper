import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient,
              private _router : Router) { }
 
  login(data:any){
    return this.http.post<any>("http://localhost:49110/api/Customer/login",data)
    .pipe(map((res:any)=>{
      return res;
    }))
   }
   logout(){
     this._router.navigate(["http://localhost:4200/homepage"])
   }
   postAdvertisment(data:any){
    return this.http.post<any>("http://localhost:49110/api/Advertisement/book_advertisement/",data);
  }
  getAdvertisments(){
    return this.http.get<any>("http://localhost:49110/api/Advertisement/get_all_advertisements/");
  }
  updateAdvertisment(data:any,id:number){
    return this.http.put<any>("http://localhost:49110/api/Advertisement/Ad_ID"+id,data)
    // .pipe(map((res:any)=>{
    //   return res;
    // }
    //))
  }
  deleteAdvertisment(id:number)
  {
    return this.http.delete<any>("http://localhost:49110/api/Advertisement/Delete?id="+id);
  }
  getFeedbacks(){
    return this.http.get<any>("http://localhost:49110/api/Feedback/GetAllFeedbacks/");
  }
  postFeedbacks(data:any){
    return this.http.post<any>("http://localhost:49110/api/Feedback/Post_Feedback/",data);
  }
  getByAdID(id:number){
    return this.http.get<any>("http://localhost:49110/api/Advertisement/"+id);
  }
  // getPrice() : number{
  //   let Price = 0;
  //   this..map((a:any)=>{
  //     Price += Price ;
  //   })
  //   return Price;
  // }
}

