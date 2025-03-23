import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgIf } from '@angular/common';
import { ContactContent } from '../../interfaces/content.interfaces';

@Component({
  selector: 'app-contact-item',
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contactItemData: ContactContent | undefined;
  
  handleContactClick(): void {
    if (!this.contactItemData) return;
    
    // Check for phone numbers: simple pattern match
    if (/^[+\d\s()-]+$/.test(this.contactItemData.value)) {
      window.location.href = `tel:${this.contactItemData.value.replace(/\s/g, '')}`;
      return;
    }
    
    // Check for email: contains @ symbol
    if (this.contactItemData.value.includes('@')) {
      window.location.href = `mailto:${this.contactItemData.value}`;
      return;
    }
    
    // Check for address: if label contains "address" or "location"
    const locationLabels = ['address', 'location'];
    if (locationLabels.some(term => this.contactItemData?.label.toLowerCase().includes(term))) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.contactItemData.value)}`, '_blank');
      return;
    }
  }
  
  isClickable(): boolean {
    if (!this.contactItemData) return false;
    
    // Phone number check
    if (/^[+\d\s()-]+$/.test(this.contactItemData.value)) return true;
    
    // Email check
    if (this.contactItemData.value.includes('@')) return true;
    
    // Location check
    const locationLabels = ['address', 'location'];
    if (locationLabels.some(term => this.contactItemData?.label.toLowerCase().includes(term))) return true;
    
    return false;
  }
}
