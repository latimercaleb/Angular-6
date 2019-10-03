import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string; // Each error could have the same message in the case of not-found, extend the data in app-routing module
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.errorMessage=this.route.snapshot.data['messageDataString'];

    this.route.data.subscribe((data: Data) => this.errorMessage = data['messageDataString']);
  }

}
