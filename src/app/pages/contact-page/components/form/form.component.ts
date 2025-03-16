import { Component } from '@angular/core';
import { BigButtonComponent } from '../../../../components/big-button/big-button.component';
import { ContentService } from '../../../../services/content.service';
import { ContactFormData } from '../../../../interfaces/content.interfaces';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BigButtonComponent, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  contactFormData: ContactFormData;

  constructor(private contentService: ContentService) {
    this.contactFormData = this.contentService.getContactFormData();
  }
}
