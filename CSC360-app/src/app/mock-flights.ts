import {Flight} from './flight';

export const FLIGHTS: Flight[] = [
  {airlines: 'United Airlines', flightNumber: 2345, departure: 'ORD', destination: 'MIA', departDate: new Date(2019, 7, 4), returnDate: new Date(2019, 7, 22),departTime: '1:45 P.M.', arrivalTime: '4:45 P.M.', price: 229},
// tslint:disable-next-line: max-line-length
  {airlines: 'American Airlines', flightNumber: 2755, departure: 'DFW', destination: 'ORD', departDate: new Date(2019, 8, 2), returnDate: new Date(2019, 8, 11), departTime: '6:45 A.M.', arrivalTime: '10:45 A.M.', price: 160},
  {airlines: 'United Airlines', flightNumber: 2245, departure: 'JFK', destination: 'ATL', departDate: new Date(2019, 6, 20), returnDate: new Date(2019, 6, 22), departTime: '1:45 P.M.', arrivalTime: '5:45 P.M.', price: 149},
  {airlines: 'Spirit Airlines', flightNumber: 3345, departure: 'LAX', destination: 'MIA', departDate: new Date(2019, 9, 4), returnDate: new Date(2019, 9, 22), departTime: '12:45 P.M.', arrivalTime: '7:45 P.M.', price: 329},
  {airlines: 'Delta', flightNumber: 7342, departure: 'ORD', destination: 'MIA', departDate: new Date(2019, 8, 4), returnDate: new Date(2019, 8, 14), departTime: '2:45 P.M.', arrivalTime: '4:45 P.M.', price: 259},
  {airlines: 'Jet Blue', flightNumber: 2789, departure: 'ORD', destination: 'MIA', departDate: new Date(2019, 7, 8), returnDate: new Date(2019, 7, 13), departTime: '3:45 P.M.', arrivalTime: '4:45 P.M.', price: 250}
];
