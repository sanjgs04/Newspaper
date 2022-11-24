import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  titel ='Feedback';
  displayedColumns: string[] = ['Name','Email','Subject','Message'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private api: ApiService,private router:Router) { }

  ngOnInit(): void {    
    this.getFeedbacks();
  }

  getFeedbacks(){
    this.api.getFeedbacks()    
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  back(){
    this.router.navigate(['adver']);
  }
  logout(){
    this.router.navigate(['adminlogin'])
  }
}
