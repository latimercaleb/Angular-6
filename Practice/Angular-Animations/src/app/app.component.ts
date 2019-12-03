import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divTransform',[
      state('default', style({
        backgroundColor: 'teal',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'chartreuse',
        transform: 'translateX(100px)'
      })),
      transition("default => highlighted", animate(500)),
      transition("highlighted => default", animate(1500)),
    ])
  ]
})
export class AppComponent {
  divAnchor: string = 'default';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.divAnchor == 'default' ? this.divAnchor = 'highlighted' : this.divAnchor = 'default';
    }
}
