import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 45.5152, lng: -122.6784 }; // Portland
  zoom = 12;
  mapOptions!: google.maps.MapOptions;

  ngOnInit() {
    // Define map options to customize appearance
    this.mapOptions = {
      // Remove UI controls
      disableDefaultUI: true, // Removes all controls
      // Or selectively disable specific controls:
      // zoomControl: false,
      // mapTypeControl: false,
      // streetViewControl: false,
      // fullscreenControl: false,
      
      // Change map style (optional)
      styles: [
        // You can add a custom style array here
        // Example style to make the map grayscale:
        {
          featureType: 'all',
          stylers: [{ saturation: -100 }]
        }
      ]
    };
  }
}
