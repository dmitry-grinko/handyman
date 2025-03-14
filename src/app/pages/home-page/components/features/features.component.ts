import { Component } from '@angular/core';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { FeaturesItemComponent, FeaturesItemData } from '../features-item/features-item.component';
import { NgFor } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import * as feather from 'feather-icons';

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
  private iconMap: { [key: string]: string } = {
    'home': feather.icons.home.toSvg({ stroke: '#e31837', 'stroke-width': 1.5 }),
    'tool': feather.icons.tool.toSvg({ stroke: '#e31837', 'stroke-width': 1.5 }),
    'briefcase': feather.icons.briefcase.toSvg({ stroke: '#e31837', 'stroke-width': 1.5 })
  };

  constructor(private contentService: ContentService) {
    const featuresContent = this.contentService.getFeaturesContent();
    this.sectionTitleData = featuresContent.sectionTitle;
    this.featuresItemData = featuresContent.featuresItems.map(item => ({
      ...item,
      icon: this.iconMap[item.icon]
    }));

    console.log(this.featuresItemData);
  }
}
