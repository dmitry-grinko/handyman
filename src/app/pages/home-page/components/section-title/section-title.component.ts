import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export interface SectionTitleData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-section-title',
  imports: [NgIf],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() data: SectionTitleData | undefined;
}
