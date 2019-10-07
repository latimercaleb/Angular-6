import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalObs: Subscription;
  constructor() { }

  ngOnInit() {
    // this.intervalObs = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   });

    // Under the hood of the interval observable above with some modifications
    const customIntervalObs = Observable.create(observer => {
      let count = 0;
      setInterval(() =>{
        observer.next(count);
        if(count == 2){
          observer.complete(); // Completes observable
        }
        if (count > 3){
          observer.error(new Error('Count has exceeded 3!'));
        }
        count +=1;
      }, 1000);
    });
    this.intervalObs = customIntervalObs.subscribe(data =>{
      console.log(data);
    }, error => {
      console.log('Error trapped ' + error);
    }, () => {
      console.log('Observable completed');
    });
  }

  ngOnDestroy(): void {
    // Upon leaving the component, clear the subscription
    this.intervalObs.unsubscribe();
  }

}
