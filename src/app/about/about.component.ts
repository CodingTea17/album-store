import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  title: string = 'My first AGM project';
  latMap: number = 45.5231;
  lngMap: number = -122.6765;
  latMarker: number = 45.520632;
  lngMarker: number = -122.677358;
  zoom: number = 13;
  iconUrl: string = "../../assets/socks.png"
}
