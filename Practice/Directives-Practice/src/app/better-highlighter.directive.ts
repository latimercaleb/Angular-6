import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {
  // Could also make use of property binding and event binding like in components
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'black';
  // Could use host binding in this case instead of renderer
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    // Use renderer to prestyle parts of the DOM 
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','pink');
  }

  @HostListener('mouseenter') onMouseOver (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','black');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave (eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','white');
    this.backgroundColor = this.defaultColor;
  }

  

}
