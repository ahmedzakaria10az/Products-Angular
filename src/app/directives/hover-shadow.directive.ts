import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverShadow]',
  standalone: true,
})
export class HoverShadowDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  }

  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
