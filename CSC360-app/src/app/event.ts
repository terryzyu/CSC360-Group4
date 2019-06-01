export class Event {
  constructor(
    public id: number = 0,
    public date: Date =  new Date(),
    public budget: number = 0,
    public name: string = 'New Event',
    public tripNum: number = 0
  ) {}
}
