import { Component, OnInit } from '@angular/core';
import {Events} from '../events';
import {EventsService} from '../events.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  indexer: number = Events.length;
  eventAdd: Events = new Events(this.indexer - 1);
  constructor(private eventsService: EventsService,
              private location: Location) { }

  ngOnInit() {
    this.eventAdd.date.setFullYear( 2019, 0, 1);
  }

  onSubmit(): void {
    this.eventsService.addEvents(this.eventAdd);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }
}
