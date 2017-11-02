import { Component, OnInit } from '@angular/core';
// import * as firebase from "firebase";
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, AuthenticationService]
})

export class UserComponent implements OnInit {
  userId: string;
  user;
  private uid: string;
  private isLoggedIn: boolean;
  private isAdmin: boolean;

  constructor(public authService: AuthenticationService,private userService: UserService, private route: ActivatedRoute, private location: Location) {
      this.authService.user.subscribe(user => {
       if (user == null) {
         this.isLoggedIn = false;
       } else {
         this.isLoggedIn = true;
         this.uid = user.uid;
       }
     });
    }

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //  this.userId = urlParameters['uid'];
    // });
    // console.log(`Is ${this.uid} (the logged in user) equal to ${this.userId} (the user's profile we are trying to load)`)
    // if (this.userId === this.uid) {
    //   this.user = this.userService.getUserById(this.userId);
    // } else {
      this.user = this.userService.getUserById(this.uid);
    // }
  }


}
