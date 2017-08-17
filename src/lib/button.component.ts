import { Component } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
  <button>
    <ng-content></ng-content>
  </button>
  `
})
export class ButtonComponent {
}
