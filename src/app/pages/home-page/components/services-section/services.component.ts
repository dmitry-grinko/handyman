import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { BigButtonComponent } from '../big-button/big-button.component';
import { ServiceItemComponent, ServiceItemData } from '../../../../components/service-item/service-item.component';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  imports: [BigButtonComponent, ServiceItemComponent, SectionTitleComponent, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {
  sectionTitleData: SectionTitleData;
  serviceItems: ServiceItemData[];
  buttonText: string;
  maxHeight: number = 0;
  private heightsReceived: number = 0;

  @ViewChildren(ServiceItemComponent) serviceItemComponents!: QueryList<ServiceItemComponent>;

  constructor(private contentService: ContentService, private router: Router) {
    const content = this.contentService.getServicesContent();
    this.sectionTitleData = content.sectionTitle;
    this.serviceItems = content.serviceItems;
    this.buttonText = content.buttonText;
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
