import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  compName: string = 'Even';
  @Input('evenListArgs') evenList: {numericValue: number, timeStamp: string}[];
  constructor() { }

  ngOnInit() {
  }

}
