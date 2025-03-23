import { Component, OnInit, HostListener } from '@angular/core';
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
export class PartnersComponent implements OnInit {
  sectionTitleData: SectionTitleData;
  partners: Partner[] = [];
  slides: Partner[][] = [];
  itemsPerSlide = 6;

  constructor(private contentService: ContentService) {
    const partnersContent = this.contentService.getPartnersContent();
    this.sectionTitleData = partnersContent.sectionTitle;
    this.partners = partnersContent.partners;
    this.setItemsPerSlide(window.innerWidth);
  }

  ngOnInit() {
    this.createSlides();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setItemsPerSlide(event.target.innerWidth);
    this.createSlides();
  }

  private setItemsPerSlide(width: number) {
    if (width < 768) {
      this.itemsPerSlide = 2; // mobile
    } else if (width < 1200) {
      this.itemsPerSlide = 3; // tablet
    } else {
      this.itemsPerSlide = 6; // desktop
    }
  }

  private createSlides() {
    let workingPartners = [...this.partners];
    while (workingPartners.length < this.itemsPerSlide * 2) {
      workingPartners = [...workingPartners, ...this.partners];
    }

    this.slides = [];
    for (let i = 0; i < workingPartners.length; i += this.itemsPerSlide) {
      const slide = workingPartners.slice(i, i + this.itemsPerSlide);
      if (slide.length === this.itemsPerSlide) {
        this.slides.push(slide);
      }
    }
  }
}
