import { Component, Input, OnInit } from '@angular/core';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { faPhone, faEnvelope, faLocation, faClock } from '@fortawesome/free-solid-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { ContactContent } from '../../interfaces/content.interfaces';
// import { ContactContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-contacts',
  imports: [ContactItemComponent, NgFor, NgIf],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  @Input() theme: string | undefined;
  contactItemData: ContactContent[] = [];
  bgColor: string = '';

  private iconMap = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faLocation: faLocation,
    faClock: faClock
  };

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    let contactContent;

    if (this.theme === 'red') {
      contactContent = this.contentService.getContactContentForRedTheme();
    } else {
      contactContent = this.contentService.getContactContentForWhiteTheme();
    }

    console.log("this.theme", this.theme);

    this.contactItemData = contactContent.items;
    this.bgColor = contactContent.bgColor;
  }
}
