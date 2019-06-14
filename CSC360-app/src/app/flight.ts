export class Flight {
  constructor(
    public airlines: string = 'United Airlines',
    public flightNumber: number = 2345,
    public departure: string = 'ORD',
    public destination: string = 'MIA',
    public departDate: Date = new Date(),
    public returnDate: Date = new Date(),
    public departTime: string = '1:45 P.M.',
    public arrivalTime: string = '4:45 P.M.',
    public price: number = 250
  ) {}
}
