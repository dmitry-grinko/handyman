import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';

interface OfferSection {
  title: string;
  description: string;
}

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {
  activeSection: number = 0;
  
  titleData: SectionTitleData = {
    title: 'Our Services',
    description: 'Professional handyman services for all your home improvement and repair needs'
  };
  
  sections: OfferSection[] = [
    {
      title: 'We Offer',
      description: 'Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus.'
    },
    {
      title: 'We Guarantee',
      description: 'Quality service and customer satisfaction guaranteed. Our team of professionals ensures that every project meets the highest standards of excellence and craftsmanship.'
    },
    {
      title: 'We Provide',
      description: 'Comprehensive rhconstructs services for all your needs. From small repairs to major renovations, our experienced team delivers reliable solutions on time and within budget.'
    }
  ];

  setActiveSection(index: number): void {
    this.activeSection = index;
  }
}
