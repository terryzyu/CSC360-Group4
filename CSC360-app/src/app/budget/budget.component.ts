import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

import {Event} from '../event';
import {FirebaseUTEService} from '../firebase-ute.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  p = 1;
  Events: Event[];
  selectedEvent: Event;
  hideWhenNoEvents = false;
  noEvents = false;
  preLoader = true;

  constructor(private location: Location,
              private fbUTEService: FirebaseUTEService,
              private router: Router) { }

  ngOnInit() {
    this.dataState();
    let t = this.fbUTEService.getEventsByUserId();
    t.snapshotChanges().subscribe( data => {
      this.Events = [];
      data.forEach( item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Events.push(a as Event);
      });
    });
  }

  dataState() {
    this.fbUTEService.getTripsByUserId().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoEvents = false;
        this.noEvents = true;
      } else {
        this.hideWhenNoEvents = true;
        this.noEvents = false;
      }
    });
  }

  goToEvent( eventId: string, eventName: string) {
    this.fbUTEService.setEventId(eventId);
    this.router.navigate([`/budget/{{eventName}}`]);
  }
  goBack() {
    this.location.back();
  }

  onDelete(event: Event, eventId: string) {
    this.selectedEvent = event
    this.fbUTEService.setEventId(eventId)
    this.fbUTEService.deleteEvent();
    this.selectedEvent = null;
  }

  onSelect(event: Event, eventId: string): void {
    this.selectedEvent = event;
    this.fbUTEService.setEventId(eventId);
  }

  onDone(event: Event): void {
    this.selectedEvent = null;
    this.fbUTEService.updateEvent(event);
  }
}
