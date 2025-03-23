import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferSectionComponent, OfferSectionData } from '../offer-section/offer-section.component';
import { ContentService } from '../../../../services/content.service';

interface OfferSection {
  title: string;
  buttonText: string;
  description: string;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, OfferSectionComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent implements OnInit {
  offerSections: OfferSectionData[] = []
  activeSection: number = 0;
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.offerSections = this.contentService.getOfferSectionData()
  }

  setActiveSection(index: number): void {
    this.activeSection = index;
  }
  
}
