import {Trip} from './trip';

export class User {

  constructor(
    public username: string = 'testUser',
    public password: string = 'testPassword',
    public email: string = 'testEmail@hotmail.com',
    public firstname: string = 'test',
    public lastname: string = '',
    public trips: Trip[] = []
  ) {}
}
