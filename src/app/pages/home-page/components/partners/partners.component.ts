import { Component, ViewChild } from '@angular/core';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { Partner } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SectionTitleComponent, NgbModule, CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  @ViewChild('carousel') carousel!: NgbCarousel;

  sectionTitleData: SectionTitleData;
  partners: Partner[];

  constructor(private contentService: ContentService) {
    const partnersContent = this.contentService.getPartnersContent();
    this.sectionTitleData = partnersContent.sectionTitle;
    this.partners = partnersContent.partners;
  }

  // Split partners into groups of 6 for carousel display
  get partnerGroups(): Partner[][] {
    const groups: Partner[][] = [];
    for (let i = 0; i < this.partners.length; i += 6) {
      groups.push(this.partners.slice(i, i + 6));
    }
    return groups;
  }

  // Track by index for both groups and partners
  trackByIndex(index: number): number {
    return index;
  }

  // Track active slide
  onSlideChange(event: any) {
    console.log('Slide changed:', event);
  }
}
