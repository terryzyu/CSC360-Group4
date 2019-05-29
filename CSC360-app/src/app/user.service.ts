import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Trip} from './trip';


import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basePath = 'users';

  private usersRef: AngularFireList<any>;
  private userRef: AngularFireObject<any>;
  constructor(public db: AngularFireDatabase) {}

  // Fetch all users.
  getUsers() {
    this.usersRef = this.db.list(this.basePath);
    return this.usersRef;
  }

  // Fetch user by id
  getUser(user: string) {
    this.userRef = this.db.object(this.basePath + '/' + user);
    return this.userRef;
  }

  addUser(newUser: User): void {
    // console.log(newUser)
    this.usersRef.push({
      username: newUser.username,
      password: newUser.password,
      email: newUser.email,
      firstname: newUser.firstname,
      lasname: newUser.lastname,
      trips: newUser.trips
    });
  }

  // Update a user
  updateUser(user: User) {
    this.userRef.update({
      username: user.username,
      password: user.password,
      email: user.email,
      firstname: user.firstname,
      lasname: user.lastname,
      trips: user.trips
    });
  }

  // Delete a User
  deleteUser(user: string) {
    this.userRef = this.db.object(this.basePath + '/' + user);
    this.userRef.remove();
  }
}
