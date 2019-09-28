import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]'

})
export class BasicHighlightDirective implements OnInit{
    constructor(private targetElement: ElementRef){
        
    }

    ngOnInit(){
        this.targetElement.nativeElement.style.backgroundColor = 'blue'; // This is bad practice shouldn't directly modify html elements in case of service workers, PWAs, Sockets, etc
    }
}