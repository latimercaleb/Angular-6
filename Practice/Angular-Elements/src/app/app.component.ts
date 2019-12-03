import { Component, Injector } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';
import { createCustomElement} from '@angular/elements';
import { AlertComponent } from './alert.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    ]),
    trigger('toList', [
      state('in', style({
        opacity: 1,
        transform: 'tranlateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ]),
    ]),
    trigger('toSecondList', [
      state('in', style({
        opacity: 1,
        transform: 'tranlateX(0)'
      })),
      transition('void => *',[
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          }))
        ])
      ]),
    ])
  ]
})
export class AppComponent {
  delayedContent: string;
  delayedComponent: any;
  constructor(injector: Injector, domSanitizer: DomSanitizer){
    const AlertCmp = createCustomElement(AlertComponent, {injector: injector});
    customElements.define('app-alert',AlertCmp);
    setTimeout(() => {
      this.delayedContent = '<p>Delayed String</p>';
      this.delayedComponent = domSanitizer.bypassSecurityTrustHtml("<app-alert message = 'Delayed component'></app-alert>"); // Won't render since component can't render as html aftercontent rendered, unless using Angular Element
    },3000);
  }
}
