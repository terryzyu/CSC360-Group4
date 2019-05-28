import {Events} from './events';

export class Trip {
  constructor(
    public startDate: Date =  new Date(),
    public endDate: Date = new Date(),
    public location: string = 'New York',
    public budget: number = 0,
    public name: string = 'New Trip',
    public user: string = 'ggk'
  ) {}
}
