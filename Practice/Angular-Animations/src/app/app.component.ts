import { Component } from '@angular/core';
import {trigger, state, style} from '@angular/animations';

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
      }))
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
