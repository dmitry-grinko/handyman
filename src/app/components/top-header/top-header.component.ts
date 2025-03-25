import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../services/content.service';

export interface TopHeaderContent {
  email: string;
  phone: string;
  ccb: string;
  icons: { icon: string; link: string }[];
}

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent implements OnInit {
  data: TopHeaderContent = {} as TopHeaderContent;
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.data = this.contentService.getTopHeaderContent();
  }
}
