import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export interface OfferSectionData {
  icon: string;
  activeIcon: string;
  buttonText: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-offer-section',
  imports: [NgIf],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.scss'
})
export class OfferSectionComponent {
  @Input() data: OfferSectionData | undefined;
}
