import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';
import { FooterContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footerContent!: FooterContent;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.footerContent = this.contentService.getFooterContent();
  }
}
