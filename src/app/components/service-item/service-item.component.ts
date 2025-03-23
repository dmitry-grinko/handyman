import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

export interface ServiceItemData {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  @Input() serviceItemData: ServiceItemData | undefined;
}
