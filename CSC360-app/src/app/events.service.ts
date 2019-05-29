import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Event} from './event';
import {EVENTS} from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Event[]> {
    return of(EVENTS);
  }

  getEvent(name: string): Observable<Event> {
    return of(EVENTS.find(event => event.name === name));
  }

  addEvents(newEvents: Event): void {
    EVENTS.push(newEvents);
  }

}
