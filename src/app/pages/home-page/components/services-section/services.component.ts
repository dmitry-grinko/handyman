import { Component } from '@angular/core';
import { BigButtonComponent } from '../../../../components/big-button/big-button.component';
import { ServiceItemComponent, ServiceItemData } from '../../../../components/service-item/service-item.component';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BigButtonComponent, ServiceItemComponent, SectionTitleComponent, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  sectionTitleData: SectionTitleData;
  serviceItems: ServiceItemData[];
  buttonText: string;

  constructor(private contentService: ContentService, private router: Router) {
    const content = this.contentService.getServicesContent();
    this.sectionTitleData = content.sectionTitle;
    this.serviceItems = content.serviceItems;
    this.buttonText = content.buttonText;
  }

  navigateToProjects() {
    this.router.navigate(['/services']);
  }
}
