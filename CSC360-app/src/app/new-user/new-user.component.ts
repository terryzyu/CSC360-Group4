import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  // @ts-ignore
  newUser: User = new User();
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userService.getUsers();
    this.userService.addUser(this.newUser);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
