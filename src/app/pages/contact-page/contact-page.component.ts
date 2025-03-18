import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { TopButtonComponent } from '../../components/top-button/top-button.component';
import { MapComponent } from './components/map/map.component';
import { FormComponent } from './components/form/form.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-contact-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    TopButtonComponent,
    MapComponent,
    FormComponent,
    ContactsComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})

export class ContactPage {
  breadcrumbData: { title: string };

  constructor(private contentService: ContentService) {
    this.breadcrumbData = this.contentService.getBreadcrumbsContactPageData();
  }
}
