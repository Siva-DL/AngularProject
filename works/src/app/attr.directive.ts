import { Directive, ElementRef } from '@angular/core';

// Use as HTML Element
// @Directive({
//   selector: 'appAttr',
// })
// export class AttrDirective {
//   constructor(private ele: ElementRef) {
//     (this.ele.nativeElement as HTMLElement).style.backgroundColor = 'red';
//   }
// }

@Directive({
  selector: '[appAttr]',
})
export class AttrDirective {
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = 'red';
  }
}
