import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-button.component.html',
  styleUrl: './top-button.component.scss'
})
export class TopButtonComponent {
  faChevronUp = faChevronUp;
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    // Show button when page is scrolled down 300px
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
