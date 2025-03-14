import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CopyrightContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  copyrightContent: CopyrightContent;

  constructor(private contentService: ContentService) {
    this.copyrightContent = this.contentService.getCopyrightContent();
  }
}
