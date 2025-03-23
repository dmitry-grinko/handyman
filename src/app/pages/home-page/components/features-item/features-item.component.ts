import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export interface FeaturesItemData {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-features-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './features-item.component.html',
  styleUrl: './features-item.component.scss'
})
export class FeaturesItemComponent {
  @Input() data: FeaturesItemData | undefined;
}
