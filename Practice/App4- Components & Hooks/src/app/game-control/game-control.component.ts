import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  header : string = "Game Control";
  constructor() { }
  counter: number = 0;
  counterID: any;
  dateTime: string;
  @Output('outputTick') newTick = new EventEmitter<{tickVal: number, timeOfTick: string}>();
  ngOnInit() {
  }

   startGame(){
    this.counterID = setInterval(this.tick.bind(this),1000,this.counter);
  }

  endGame(){
    console.log('Game End');
    clearInterval(this.counterID);
  }

  tick(){
    this.counter ++;
    this.dateTime = new Date().toLocaleTimeString('en-US');
    this.newTick.emit({
      tickVal: this.counter,
      timeOfTick: this.dateTime
    });
  }

}
