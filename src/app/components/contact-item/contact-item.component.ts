import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NgIf } from '@angular/common';
import { ContactContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-contact-item',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contactItemData: ContactContent | undefined;
}
