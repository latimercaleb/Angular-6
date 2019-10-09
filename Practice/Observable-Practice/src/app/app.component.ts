import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  activatedSubject: Subscription;
  constructor(private serviceUser: UserService) {}

  ngOnInit() {
    // this.serviceUser.activatedEmitter.subscribe(didActivate => {
    //   this.userActivated = didActivate;
    // });
    this.activatedSubject = this.serviceUser.activatedSubject.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy(){
    this.activatedSubject.unsubscribe();
  }
}
