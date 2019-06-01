import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseUTEService } from '../firebase-ute.service';
import { AuthService } from '../auth.service';

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
    
          this.router.navigate(['homepage']);
       })
       .catch((err) => console.log('error: ' + err));
 }
}
