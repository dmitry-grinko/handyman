import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { TopButtonComponent } from '../../components/top-button/top-button.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { ContentService } from '../../services/content.service';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-our-team-page',
  imports: [
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    TopButtonComponent,
    ContactsComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './our-team-page.component.html',
  styleUrl: './our-team-page.component.scss'
})

export class OurTeamPage {
  breadcrumbData: { title: string };

  constructor(private contentService: ContentService) {
    this.breadcrumbData = this.contentService.getBreadcrumbsOurTeamPageData();
  }
}
