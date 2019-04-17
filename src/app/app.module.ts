import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MoinComponent } from './moin/moin.component';

@NgModule({
  declarations: [MoinComponent],
  imports: [BrowserModule],
  entryComponents: [MoinComponent]
})
export class AppModule {
  ngDoBootstrap() {}
  constructor(private injector: Injector) {
    const moin = createCustomElement(MoinComponent, { injector });
    customElements.define('moin-moin', moin);
  }
}
