import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  center: google.maps.LatLngLiteral = { lat: 45.5152, lng: -122.6784 }; // Portland
  zoom = 12;
}
