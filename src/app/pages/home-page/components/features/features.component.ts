import { Component } from '@angular/core';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { FeaturesItemComponent, FeaturesItemData } from '../features-item/features-item.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [SectionTitleComponent, FeaturesItemComponent, NgFor],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  sectionTitleData: SectionTitleData;
  featuresItemData: FeaturesItemData[] = [];

  constructor(private contentService: ContentService) {
    const featuresContent = this.contentService.getFeaturesContent();
    this.sectionTitleData = featuresContent.sectionTitle;
    this.featuresItemData = featuresContent.featuresItems;
  }
}
