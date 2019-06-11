import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseUTEService } from '../firebase-ute.service';
import { AuthService } from '../auth.service';
import {User} from "../user";
import {forEach} from "@angular/router/src/utils/collection";
import {ignore} from "selenium-webdriver/testing";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private fbUTEService: FirebaseUTEService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.user.email, this.user.password)
       .then((res) => {
         let userObj: User;
         const userObs = this.fbUTEService.getUsersByEmail(this.user.email);
         userObs.snapshotChanges().subscribe(data => {
            data.forEach(item => {
              const a = item.payload.toJSON();
              // @ts-ignore
              a['$key'] = item.key;
              userObj = a as User;
            });
            // @ts-ignore
            this.fbUTEService.setUserId(userObj.$key);
            this.router.navigate(['homepage']);
         });
       })
       .catch((err) => console.log('error: ' + err));
 }
}
