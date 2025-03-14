import { Component } from '@angular/core';
import { TopButtonComponent } from '../../components/top-button/top-button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { ContentService } from '../../services/content.service';
import { ServicesGalleryComponent } from './components/services-gallery/services-gallery.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContactsComponent,
    FooterComponent,
    CopyrightComponent,
    TopButtonComponent,
    BreadcrumbsComponent,
    ServicesGalleryComponent
  ],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPage {
  breadcrumbData: { title: string };

  constructor(private contentService: ContentService) {
    this.breadcrumbData = this.contentService.getBreadcrumbsServicesPageData();
  }
}
