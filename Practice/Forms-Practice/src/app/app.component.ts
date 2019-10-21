import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fData',  {static: false}) formData: NgForm;
  defaultVal: string = 'pet'; // Name here should be value of one of the options to provide a default value via typescript
  ans: string = '';
  genders = ['male','female'];
  user = {
    name: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  submitted: boolean = false;

  suggestUserName() {
    // Two ways of using events to set values 
    const suggestedName = 'Superuser';
    // Method 1: .setValue() sets the whole form
    // this.formData.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'Test@test.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'Stubbed',
    //   gender: 'male'
    // });
    
    // Method 2: .patchValue() sets parts of the form
    this.formData.form.patchValue({
      userData:{
        username: 'new name'
      }
    });
  }

  // onSubmit(form: NgForm){ // Needs (ngSubmit)="onSubmit(fData)" #fData="ngForm" added to the form in the template
  //   console.log('Submitted');
  //   console.log(form);
  // }

  onSubmit(){
    // Extract form data and reset the form
    console.log(this.formData);
    this.user.name = this.formData.value.userData.username;
    this.user.email = this.formData.value.userData.email;
    this.user.secret = this.formData.value.secret;
    this.user.answer = this.formData.value.questionAnswer;
    this.user.gender = this.formData.value.gender;
    this.submitted = true;
    this.formData.reset();
  }
}
