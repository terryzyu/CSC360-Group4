import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../user';
import { Router } from '@angular/router';

import {FirebaseUTEService} from '../firebase-ute.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  // @ts-ignore
  newUser: User = new User();
  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fbUTEService: FirebaseUTEService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {

    try {
      this.authService.createWithEmail(this.newUser.email, this.newUser.password)
      .then((res) => {
      this.fbUTEService.getUsers();
      this.fbUTEService.addUser(this.newUser);
      this.goBack()
      this.authService.signInWithEmail(this.newUser.email, this.newUser.password)
       .then((res) => {

          this.fbUTEService.setUserId(this.fbUTEService.getUsersByEmail(this.newUser.email)[0].username)
          this.router.navigate(['homepage']);
       })
       .catch((err) => console.log('error: ' + err));});
    }
    catch(e) {
      console.log(e);
    }
    
  }

  goBack() {
    this.location.back();
  }

}
