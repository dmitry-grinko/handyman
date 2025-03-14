import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';

export interface ServiceItemData {
  image: string;
  title: string;
  description: string;
}
export interface ServiceTitleData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-service-item',
  imports: [NgIf],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent implements AfterViewInit {
  @Input() serviceItemData: ServiceItemData | undefined;
  @Input() set height(value: number) {
    if (value && this.serviceItem) {
      this.serviceItem.nativeElement.style.height = `${value}px`;
    }
  }
  @Output() heightChange = new EventEmitter<number>();
  
  @ViewChild('serviceItem') serviceItem!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    if (this.serviceItemData) {
      // Create a temporary image to ensure the image is loaded
      const img = new Image();
      img.onload = () => {
        // Wait for next tick to ensure all DOM updates are complete
        setTimeout(() => {
          if (this.serviceItem) {
            this.heightChange.emit(this.serviceItem.nativeElement.offsetHeight);
          }
        }, 0);
      };
      img.src = this.serviceItemData.image;
    }
  }
}
