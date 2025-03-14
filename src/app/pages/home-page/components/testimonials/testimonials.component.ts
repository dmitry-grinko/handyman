import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from '../../../../services/content.service';
import { Testimonial } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @ViewChild('carousel') carousel!: NgbCarousel;
  testimonials: Testimonial[];

  constructor(private contentService: ContentService) {
    this.testimonials = this.contentService.getTestimonialsContent();
  }
}
