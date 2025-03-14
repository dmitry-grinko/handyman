import { Component } from '@angular/core';
import { ContactItemComponent, ContactItemData } from '../contact-item/contact-item.component';
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import { NgFor } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { ContactContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-contacts',
  imports: [ContactItemComponent, NgFor],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  contactItemData: ContactItemData[] = [];
  private iconMap = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faLocation: faLocation
  };

  constructor(private contentService: ContentService) {
    const contactContent = this.contentService.getContactContent();
    this.contactItemData = contactContent.map(item => ({
      ...item,
      icon: this.iconMap[item.icon]
    }));
  }
}
