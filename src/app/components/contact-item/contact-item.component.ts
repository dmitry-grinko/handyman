import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NgIf } from '@angular/common';
export interface ContactItemData {
  icon: IconDefinition;
  label: string;
  value: string;
  whiteText: boolean;
  borderColor: string;
}

@Component({
  selector: 'app-contact-item',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contactItemData: ContactItemData | undefined;
}
