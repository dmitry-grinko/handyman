import { Component, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../../../services/content.service';
import { Testimonial } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, NgbModule, NgbCarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('carousel') carousel!: NgbCarousel;
  testimonials: Testimonial[];
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor(private contentService: ContentService) {
    this.testimonials = this.contentService.getTestimonialsContent();
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1200;
  }
}
