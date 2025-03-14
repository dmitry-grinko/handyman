import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { SliderContent } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-slider',
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  standalone: true
})
export class SliderComponent implements OnInit {
  slides: SliderContent[] = [];

  constructor(private contentService: ContentService) {
    this.slides = this.contentService.getSliderContent();
  }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }
}
