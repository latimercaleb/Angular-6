import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // params and any other observable that is provided by some package or feature in angular, Angular will unsubscribe manually for you
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
