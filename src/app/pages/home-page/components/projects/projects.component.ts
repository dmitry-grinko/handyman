import { Component } from '@angular/core';
import { SectionTitleComponent, SectionTitleData } from '../section-title/section-title.component';
import { ContentService } from '../../../../services/content.service';
import { ProjectsContent } from '../../../../interfaces/content.interfaces';
import { NgFor } from '@angular/common';
import { ProjectItemComponent } from '../../../../components/project-item/project-item.component';

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, NgFor, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectsContent: ProjectsContent;
  sectionTitleData: SectionTitleData;

  constructor(private contentService: ContentService) {
    this.projectsContent = this.contentService.getProjectsContentForHomePage();
    this.sectionTitleData = this.projectsContent.sectionTitle;
  }
}
