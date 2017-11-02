import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import * as firebase from "firebase";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})

export class AdminComponent {
  private user;

  constructor(private albumService: AlbumService) { }

  submitForm(title: string, artist: string, description: string) {
    let newAlbum: Album = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
