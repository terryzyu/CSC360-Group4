import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    
  }

  goBack() {
    this.location.back();
  }
}
