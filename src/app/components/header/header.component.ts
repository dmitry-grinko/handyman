import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { ContentService } from '../../services/content.service';
import { HeaderContent } from '../../interfaces/content.interfaces';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, NgbModule, TopHeaderComponent, NgFor]
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  headerContent: HeaderContent;
  isScrolled = false;
  isMobile = false;

  constructor(
    private contentService: ContentService,
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.headerContent = this.contentService.getHeaderContent();
  }

  ngOnInit(): void {
    this.checkScreenSize();
    
    // Close menu on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMenuCollapsed = true;
    });
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // md breakpoint in Bootstrap
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Only apply scrolled class if not on mobile
    if (this.isMobile) {
      this.isScrolled = false;
    } else {
      this.isScrolled = window.scrollY > 0;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Close menu when clicking outside
    if (!this.isMenuCollapsed && this.isMobile) {
      const targetElement = event.target as HTMLElement;
      
      // Check if click target is outside the navbar and not the toggle button
      const isClickInsideNavbar = this.elementRef.nativeElement.querySelector('.navbar-collapse').contains(targetElement);
      const isToggleButton = this.elementRef.nativeElement.querySelector('.navbar-toggler').contains(targetElement);
      
      if (!isClickInsideNavbar && !isToggleButton) {
        this.isMenuCollapsed = true;
      }
    }
  }
}
