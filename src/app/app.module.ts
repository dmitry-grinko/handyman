import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

// ... other imports

export class MyHammerConfig extends HammerGestureConfig {
  override buildHammer(element: HTMLElement) {
    const hammer = new Hammer(element, {
      touchAction: 'auto',
    });
    return hammer;
  }
}

@NgModule({
  declarations: [
    // ... your components
  ],
  imports: [
    BrowserModule,
    HammerModule,
    // ... other modules
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { } 