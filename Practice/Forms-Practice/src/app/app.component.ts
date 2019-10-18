import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fData',  {static: false}) formData: NgForm;
  defaultVal: string = 'pet';
  ans: string = '';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm){ // Needs (ngSubmit)="onSubmit(fData)" #fData="ngForm" added to the form in the template
  //   console.log('Submitted');
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.formData);
  }
}
