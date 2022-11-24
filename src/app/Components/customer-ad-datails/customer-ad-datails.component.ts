import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { ApiService } from 'src/app/shared/api.service'; 
import { CdialogComponent } from '../custDialog/cdialog/cdialog.component'; 
import {MatPaginator} from '@angular/material/paginator'; 
import {MatSort} from '@angular/material/sort'; 
import {MatTableDataSource} from '@angular/material/table'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-ad-datails',
  templateUrl: './customer-ad-datails.component.html',
  styleUrls: ['./customer-ad-datails.component.css']
})
export class CustomerAdDtailsComponent implements OnInit { 
  titel ='AdvertismentDetails';
  displayedColumns: string[] = ['UserName', 'Ad_Title', 'Ad_Description', 'PageNumber','Category','DateOfPost','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService,private router: Router) { }

  
  openDialog() {
    this.dialog.open(CdialogComponent, {
      width:'30%'
    });
  }
  ngOnInit(): void {
    
  }
  logout(){
    this.router.navigate(['login'])
  }
}