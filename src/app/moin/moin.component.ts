import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'moin-moin',
  template: `
    <p>moin {{ name }}!</p>
    <button (click)="hi()">^5</button>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MoinComponent implements OnChanges {
  @Input() name: string;
  @Output() highFive = new EventEmitter<string>();
  constructor() {}

  ngOnChanges(obj) {
    console.warn(obj);
  }

  hi() {
    this.highFive.emit(`Hi! I'm ${this.name}!`);
  }
}
