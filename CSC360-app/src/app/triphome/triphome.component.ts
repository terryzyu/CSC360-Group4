import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triphome',
  templateUrl: './triphome.component.html',
  styleUrls: ['./triphome.component.css']
})
export class TriphomeComponent implements OnInit {
  tripName = 'trip1';
  constructor() { }

  ngOnInit() {
  }
}
