import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Events} from './events';
import {EVENTS} from './mock-events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Events[]> {
    return of(EVENTS);
  }

  getEvent(name: string): Observable<Events> {
    return of(EVENTS.find(event => event.name === name));
  }

  addEvents(newEvents: Events): void {
    EVENTS.push(newEvents);
  }
}
