import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  parametersSubscription: Subscription;
  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    // Figuring out what user is loaded by getting the user from the url, more lightweight but will cause errors if component can talk to itself
    this.user  = {
      id: this.currentRoute.snapshot.params['id'],
      name: this.currentRoute.snapshot.params['name']
    };
    // Updating the UI if we change the data on reload or from within itself, this is the preferred means if the component does work on itself
    this.parametersSubscription = this.currentRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(){
    // It's best to unsubscribe on your own, Angular will handle system observables, but manual observables MUST be unsubscribed, start building this practice now
    this.parametersSubscription.unsubscribe();
  }



}
