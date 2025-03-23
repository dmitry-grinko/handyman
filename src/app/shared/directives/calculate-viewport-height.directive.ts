import { Directive, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '[appCalculateViewportHeight]',
  standalone: true
})
export class CalculateViewportHeightDirective implements AfterViewInit, OnDestroy {
  private observer: MutationObserver;
  private resizeHandler: () => void;
  private scrollHandler: () => void;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {
    this.resizeHandler = () => this.calculateHeight();
    this.scrollHandler = () => this.calculateHeight();
  }

  ngAfterViewInit(): void {
    // Initial calculation
    setTimeout(() => this.calculateHeight(), 100);

    // Set up observers and event listeners
    this.setupObservers();
  }

  private setupObservers(): void {
    // MutationObserver for DOM changes
    this.observer = new MutationObserver(() => this.calculateHeight());
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Event listeners for scroll and resize
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.scrollHandler, { passive: true });
      window.addEventListener('resize', this.resizeHandler, { passive: true });
    });
  }

  private calculateHeight(): void {
    requestAnimationFrame(() => {
      const headerEl = document.querySelector('app-header');
      const footerEl = document.querySelector('app-footer');
      const contactsEl = document.querySelector('app-contacts');
      const copyrightEl = document.querySelector('app-copyright');
      const breadcrumbsEl = document.querySelector('app-breadcrumbs');

      const headerHeight = headerEl ? this.getActualHeight(headerEl) : 0;
      const footerHeight = footerEl ? this.getActualHeight(footerEl) : 0;
      const contactsHeight = contactsEl ? this.getActualHeight(contactsEl) : 0;
      const copyrightHeight = copyrightEl ? this.getActualHeight(copyrightEl) : 0;
      const breadcrumbsHeight = breadcrumbsEl ? this.getActualHeight(breadcrumbsEl) : 0;

      const totalHeight = headerHeight + footerHeight + contactsHeight + copyrightHeight + breadcrumbsHeight;
      
      this.elementRef.nativeElement.style.setProperty('--total-height', `${totalHeight}px`);
    });
  }

  private getActualHeight(element: Element): number {
    const styles = window.getComputedStyle(element);
    const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    const height = element.getBoundingClientRect().height;
    return height + margin;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.resizeHandler);
  }
} 