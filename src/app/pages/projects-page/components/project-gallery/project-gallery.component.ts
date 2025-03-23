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
  selectedImage: any = null;
  slidePosition: number = 0;
  isAnimating: boolean = false;
  currentIndex: number = 0;
  
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

  openImageModal(image: any): void {
    this.selectedImage = image;
    
    // Find the correct index of the clicked image
    this.currentIndex = this.filteredImages.findIndex(img => img === image);
    
    // Calculate the slide position based on the current index
    this.slidePosition = -100 * this.currentIndex;
    
    this.isAnimating = false;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeImageModal(): void {
    this.selectedImage = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  nextImage(): void {
    // Don't proceed if we're at the last image, or if animation is in progress
    if (!this.selectedImage || 
        this.currentIndex >= this.filteredImages.length - 1 || 
        this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Move to the next slide
    this.currentIndex++;
    this.slidePosition = -100 * this.currentIndex;
    
    // Update the selected image
    this.selectedImage = this.filteredImages[this.currentIndex];
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

  prevImage(): void {
    // Don't proceed if we're at the first image, or if animation is in progress
    if (!this.selectedImage || 
        this.currentIndex <= 0 || 
        this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Move to the previous slide
    this.currentIndex--;
    this.slidePosition = -100 * this.currentIndex;
    
    // Update the selected image
    this.selectedImage = this.filteredImages[this.currentIndex];
    
    setTimeout(() => {
      this.isAnimating = false;
    }, 400);
  }

  getNextImage(): any {
    if (!this.selectedImage || this.filteredImages.length <= 1) return null;
    
    const currentIndex = this.filteredImages.findIndex(img => img === this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.filteredImages.length;
    return this.filteredImages[nextIndex];
  }

  getPrevImage(): any {
    if (!this.selectedImage || this.filteredImages.length <= 1) return null;
    
    const currentIndex = this.filteredImages.findIndex(img => img === this.selectedImage);
    const prevIndex = (currentIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
    return this.filteredImages[prevIndex];
  }
}
