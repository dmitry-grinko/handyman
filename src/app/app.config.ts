import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Add this css to the global styles to prevent the page from scrolling to the top when the route changes:
    // html {
    //   scroll-behavior: auto !important;
    // }
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'disabled'
    })),
    provideAnimations(),
  ]
};
