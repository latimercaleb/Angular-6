import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numericValue: number;
  timeStamp: string;
  oddCollection: {numericValue: number, timeStamp: string}[] = [];
  evenCollection: {numericValue: number, timeStamp: string}[] =[];

  onGameTick(gameTick: {tickVal: number, timeOfTick: string}){
    this.timeStamp = gameTick.timeOfTick;
    this.numericValue = gameTick.tickVal;
    this.evenOrOdd();
  }

  evenOrOdd(){
    (this.numericValue % 2) == 0 ? this.insertEven() : this.insertOdd();
  }

  insertOdd(){
    this.oddCollection.push({
      numericValue : this.numericValue,
      timeStamp: this.timeStamp
    });
  }

  insertEven(){
    this.evenCollection.push({
      numericValue : this.numericValue,
      timeStamp: this.timeStamp
    });
  }
}
