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
    transition("default <=> highlighted", animate(500))
    ]),    
    trigger('secondForm',[
      state('default', style({
        backgroundColor: 'teal',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'chartreuse',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'aliceblue',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition("default <=> highlighted", animate(300)),
      transition("highlighted <=> default", animate(800)),
      transition("shrunken <=>*",[
        style({
          'background-color': 'rebeccapurple'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(1500)
      ])
    ])
  ]
})
export class AppComponent {
  divAnchor: string = 'default';
  div2Anchor: string = 'default';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onAnimate(){
      this.divAnchor == 'default' ? this.divAnchor = 'highlighted' : this.divAnchor = 'default';
      this.div2Anchor == 'default' ? this.div2Anchor = 'highlighted' : this.div2Anchor = 'default';
    }

    onShrink(){
      this.div2Anchor = 'shrunken';
    }
}
