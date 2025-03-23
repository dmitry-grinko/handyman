import { Component, HostListener } from '@angular/core';
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
  screenWidth: number;

  constructor(private contentService: ContentService) {
    this.projectsContent = this.contentService.getProjectsContentForHomePage();
    this.sectionTitleData = this.projectsContent.sectionTitle;
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  get displayedProjects() {
    if (this.screenWidth < 768) {
      return this.projectsContent.projects.slice(0, 1);
    } else if (this.screenWidth >= 992 && this.screenWidth <= 1200) {
      return this.projectsContent.projects.slice(0, 3);
    }
    return this.projectsContent.projects;
  }

  getColumnClass(): string {
    if (this.screenWidth < 768) {
      return 'col-12';
    } else if (this.screenWidth >= 992 && this.screenWidth <= 1200) {
      return 'col-12 col-lg-4'; // 3 items per row
    }
    return 'col-12 col-md-6 col-lg-3'; // 4 items per row
  }
}
