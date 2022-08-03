/* 
  Custom Structural Directives
*/

import {
  Directive,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appStrdir]',
})
export class StrdirDirective implements OnChanges {
  @Input() appStrdir: boolean = true;

  // tempRef,
  // VcRef

  ngOnChanges() {
    if (this.appStrdir) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private vcRef: ViewContainerRef,
    private tempRef: TemplateRef<any>
  ) {}
}
