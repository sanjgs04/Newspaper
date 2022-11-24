import { Component, OnInit, inject ,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adver',
  templateUrl: './adver.component.html',
  styleUrls: ['./adver.component.css']
})
export class AdverComponent implements OnInit {
  titel ='AdvertismentDetails';
  displayedColumns: string[] = ['UserName', 'Ad_Title', 'Ad_Description', 'PageNumber','Category','DateOfPost','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService,private router:Router) { }  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    })
  } 
  ngOnInit(): void {
    this.getAllAdvertisments();
  }
  getAllAdvertisments(){
    this.api.getAdvertisments()
    .subscribe({
    next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=> {
      alert("error while fetching the Records!!")      
    },
   })
  }
  
  editAdvertisment(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllAdvertisments();
      }
    })
  }
  
  deleteAdvertisment(Ad_ID:number){
    this.api.deleteAdvertisment(Ad_ID)
    .subscribe({
      next:(res)=>{
        alert("deleted successfully")
        this.getAllAdvertisments();
      },
      error:()=>{
        alert("deleted successfully")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logout(){
    this.router.navigate(['adminlogin'])
  }
  getFeedbacks(){
    this.router.navigate(['feedback'])
  }
  
}