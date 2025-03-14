import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface FeaturesItemData {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-features-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './features-item.component.html',
  styleUrl: './features-item.component.scss'
})
export class FeaturesItemComponent {
  @Input() data: FeaturesItemData | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeIcon(): SafeHtml | undefined {
    return this.data ? this.sanitizer.bypassSecurityTrustHtml(this.data.icon) : undefined;
  }
}
