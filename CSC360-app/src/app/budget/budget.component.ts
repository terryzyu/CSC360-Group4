import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';


import {Events} from '../events';
import {EventsService} from '../events.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  Events: Events[];

  constructor(private eventsService: EventsService,
              private location: Location) { }

  ngOnInit() {
    this.getEvents();
  }

  private getEvents() {
    this.eventsService.getEvents().subscribe(event => this.Events = event);
  }

  goBack() {
    this.location.back();
  }

  onDelete(arrayElement: Events) {
    this.Events = this.Events.filter(obj => obj !== arrayElement);
  }
}
