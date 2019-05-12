import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';

@Component({
  selector: 'app-newtrip',
  templateUrl: './newtrip.component.html',
  styleUrls: ['./newtrip.component.css']
})
export class NewtripComponent implements OnInit {
  tripDate = 'May-32-2019';
  newTrip: Trip = new Trip( );
  constructor() { }

  ngOnInit() {
    this.newTrip.startDate.setFullYear(1970, 0, 1);
    this.newTrip.endDate.setFullYear(1970, 0, 2);
  }

}
