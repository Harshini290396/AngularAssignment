import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class ChangeThemeDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}
