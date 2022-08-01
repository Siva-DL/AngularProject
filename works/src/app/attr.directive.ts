import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]',
})
export class AttrDirective {
  constructor(ele: ElementRef) {
    ele.nativeElement.style.backgroundColor = 'red';
  }
}
