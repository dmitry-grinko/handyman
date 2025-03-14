import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ServiceItemComponent, ServiceItemData } from '../../../../components/service-item/service-item.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-gallery',
  imports: [ServiceItemComponent, NgFor],
  templateUrl: './services-gallery.component.html',
  styleUrl: './services-gallery.component.scss'
})
export class ServicesGalleryComponent implements AfterViewInit {
  serviceItems: ServiceItemData[];
  maxHeight: number = 0;
  private heightsReceived: number = 0;

  @ViewChildren(ServiceItemComponent) serviceItemComponents!: QueryList<ServiceItemComponent>;

  constructor(private contentService: ContentService, private router: Router) {
    const content = this.contentService.getServicesContent();
    this.serviceItems = content.serviceItems;
  }

  ngAfterViewInit() {
    // Subscribe to height changes from all service items
    this.serviceItemComponents.forEach(component => {
      component.heightChange.subscribe(height => {
        this.maxHeight = Math.max(this.maxHeight, height);
        this.heightsReceived++;

        // Only update heights after we've received all heights
        if (this.heightsReceived === this.serviceItems.length) {
          // Add a small buffer to prevent text overflow
          const finalHeight = this.maxHeight + 2;
          this.serviceItemComponents.forEach(item => {
            item.height = finalHeight;
          });
        }
      });
    });
  }

  navigateToProjects() {
    this.router.navigate(['/services']);
  }
}
