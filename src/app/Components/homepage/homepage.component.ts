import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myimag:string="assets/img/img1.png";
  constructor() { }

  ngOnInit(): void {
  }

}
