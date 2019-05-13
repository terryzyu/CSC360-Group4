export class Events {
  constructor(
    public date: Date =  new Date(),
    public budget: number = 0,
    public name: string = 'New Trip'
  ) {}
}
