import { Component } from '@angular/core';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { AboutItemComponent, AboutItemData } from '../about-item/about-item.component';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHelmetSafety, faPaintRoller, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { ContentService } from '../../../../services/content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, AboutItemComponent, NgFor, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  sectionTitleData: SectionTitleData;
  aboutItemData: AboutItemData[] = [];
  private iconMap = {
    faHelmetSafety,
    faPaintRoller,
    faScrewdriverWrench
  };

  constructor(private contentService: ContentService) {
    const aboutContent = this.contentService.getAboutContent();
    this.sectionTitleData = aboutContent.sectionTitle;
    this.aboutItemData = aboutContent.aboutItems;
  }
}
