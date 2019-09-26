import { Component, OnInit, Input, SimpleChanges,OnChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck {
  @Input() element :{name: string, content: string, type: string};
  hookCount: number = 0;
  // Demo of lifecycle hooks below
  constructor() {
    this.hookCount +=1; 
    console.log(this.hookCount + " Constructor called");
  }

  ngOnInit() {
    this.hookCount +=1;
    console.log(this.hookCount +" NgOnInit called");
  }

  ngOnChanges(changes: SimpleChanges) { // Only hook that gets an argument
    this.hookCount +=1;
    console.log(this.hookCount +" NgOnChanges called");
    console.log("Changes are: " + changes);
  }

  ngDoCheck() { // ngDoCheck runs ALOT, so be careful adding lots of logic here
    this.hookCount +=1;
    console.log(this.hookCount +" ngDoCheck called");
  }
  
  ngAfterContentInit() { 
    this.hookCount +=1;
    console.log(this.hookCount +" ngAfterContentInit called");
  }

  ngAfterContentChecked() { 
    this.hookCount +=1;
    console.log(this.hookCount +" ngAfterContentChecked called");
  }

  ngAfterViewInit() { 
    this.hookCount +=1;
    console.log(this.hookCount +" ngAfterViewInit called");
  }

  ngAfterViewChecked() {
    this.hookCount +=1;
    console.log(this.hookCount +" ngAfterViewChecked called");
  }

  ngOnDestroy() {
    this.hookCount +=1;
    console.log(this.hookCount +" ngOnDestroy called");
  }

}
