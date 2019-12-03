import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `<div>
    This is an alert. {{message}}
  </div>`,
  styles: [`
    div{
      border: 1px solid black;
      background: salmon;
      padding: 10px;
    }
  `]
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
