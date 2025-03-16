import { Component } from '@angular/core';
import { BigButtonComponent } from '../../../../components/big-button/big-button.component';
import { ContentService } from '../../../../services/content.service';
import { CTAContent } from '../../../../interfaces/content.interfaces';

@Component({
  selector: 'app-cta',
  imports: [BigButtonComponent],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CTAComponent {
  content: CTAContent;

  constructor(private contentService: ContentService) {
    this.content = this.contentService.getCTAContent();
  }
}
