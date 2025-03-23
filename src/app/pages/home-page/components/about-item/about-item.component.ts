import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface AboutItemData {
  icon: string;
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
