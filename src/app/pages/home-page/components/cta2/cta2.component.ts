import { Component } from '@angular/core';
import { BigButtonComponent } from '../big-button/big-button.component';
import { ContentService } from '../../../../services/content.service';
import { CTA2Content } from '../../../../interfaces/content.interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cta2',
  imports: [BigButtonComponent],
  templateUrl: './cta2.component.html',
  styleUrl: './cta2.component.scss'
})
export class CTA2Component {
  content: CTA2Content;
  myButtonText: string;

  constructor(private contentService: ContentService, private router: Router) {
    this.content = this.contentService.getCTA2Content();
    this.myButtonText = this.content.buttonText;
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
