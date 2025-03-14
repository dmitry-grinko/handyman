import { Component, OnInit } from '@angular/core';
import { TopButtonComponent } from '../../components/top-button/top-button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CopyrightComponent } from '../../components/copyright/copyright.component';
import { ContactsComponent } from '../../components/contacts/contacts.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ContactsComponent,
    FooterComponent,
    CopyrightComponent,
    TopButtonComponent,
    BreadcrumbsComponent,
    ProjectGalleryComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPage implements OnInit {
  breadcrumbData: { title: string };

  constructor(
    private contentService: ContentService,
  ) {
    this.breadcrumbData = this.contentService.getBreadcrumbsProjectsPageData();
  }

  ngOnInit(): void {
  }
}
