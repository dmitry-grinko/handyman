import { Component } from '@angular/core';
import { ServiceItemComponent, ServiceItemData } from '../../../../components/service-item/service-item.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';

@Component({
  selector: 'app-services-gallery',
  standalone: true,
  imports: [ServiceItemComponent, NgFor],
  templateUrl: './services-gallery.component.html',
  styleUrl: './services-gallery.component.scss'
})
export class ServicesGalleryComponent {
  serviceItems: ServiceItemData[];

  constructor(private contentService: ContentService) {
    const content = this.contentService.getServicesContent();
    this.serviceItems = content.serviceItems;
  }
}
