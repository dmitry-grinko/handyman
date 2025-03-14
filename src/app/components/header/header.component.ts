import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { ContentService } from '../../services/content.service';
import { HeaderContent } from '../../interfaces/content.interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterModule, NgbModule, TopHeaderComponent, NgFor]
})
export class HeaderComponent {
  isMenuCollapsed = true;
  headerContent: HeaderContent;
  isScrolled = false;

  constructor(private contentService: ContentService) {
    this.headerContent = this.contentService.getHeaderContent();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
