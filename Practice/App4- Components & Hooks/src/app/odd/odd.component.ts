import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  compName: string = 'Odd';
  @Input('oddListArgs') oddList: {numericValue: number, timeStamp: string}[];
  constructor() { }

  ngOnInit() {
  }

}
