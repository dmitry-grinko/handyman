import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItemData } from '../services-gallery/services-gallery.interfaces';

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="service-item">
      <h3>{{ serviceItemData.title }}</h3>
      <p>{{ serviceItemData.description }}</p>
      <!-- Add other elements as needed -->
    </div>
  `,
  styles: [`
    .service-item {
      // Add your styles here
    }
  `]
})
export class ServiceItemComponent {
  @Input() serviceItemData!: ServiceItemData;
} 