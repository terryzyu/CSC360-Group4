import {Trip} from './trip';

export class User {

  constructor(
    public username: '',
    public password: '',
    public email: '',
    public firstname: '',
    public lastname: '',
    public trips: Trip[] = []
  ) {}
}
