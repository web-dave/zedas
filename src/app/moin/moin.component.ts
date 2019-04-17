import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-moin',
  template: `
    <p>
      moin works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
