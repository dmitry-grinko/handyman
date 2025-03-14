import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface AboutItemData {
  icon: IconDefinition;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-item',
  standalone: true,
  imports: [NgIf, FontAwesomeModule],
  templateUrl: './about-item.component.html',
  styleUrl: './about-item.component.scss'
})
export class AboutItemComponent {
  @Input() aboutItemData: AboutItemData | undefined;
}
