import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  private user;

  constructor() {

  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
