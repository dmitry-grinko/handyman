import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../services/content.service';
import { ProjectContent } from '../../../../interfaces/content.interfaces';

interface ProjectImage {
  src: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxMasonryModule]
})
export class ProjectGalleryComponent implements OnInit {
  projectsContent: ProjectContent[] = [];

  public masonryOptions: NgxMasonryOptions = {
    gutter: 16,
    percentPosition: true,
    resize: true,
    horizontalOrder: true
  };

  public categories: string[] = [];
  public selectedCategory: string = 'All';
  public filteredImages: ProjectImage[] = [];

  public masonryImages: ProjectImage[] = [];

  constructor(private contentService: ContentService) {

  }

  ngOnInit(): void {
    this.masonryImages = this.contentService.getProjectsContentForProjectsPage();
    this.categories = ['All', ...new Set(this.masonryImages.map(image => image.category))];

    this.filterImages();
  }

  filterImages(): void {
    this.filteredImages = this.selectedCategory === 'All'
      ? this.masonryImages
      : this.masonryImages.filter(image => image.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterImages();
  }
}
