import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appForm', {static: false}) myForm: NgForm;
  serviceTypes: string[] = [];
  formSubmitted: boolean;
  data: {email: string, sub: string, pass: string} = {
    email: '',
    sub:'',
    pass:''
  };

  constructor(){
    this.serviceTypes.push('Basic', 'Advanced', 'Pro');
    this.formSubmitted = false;
  }

  handleSubmit(){
    console.log(this.myForm);
    if(this.myForm.valid){
      this.data.email = this.myForm.value.email;
      this.data.sub = this.myForm.value.subscription;
      this.data.pass = this.myForm.value.password;
      this.myForm.reset({subscription: this.serviceTypes[1]});
      this.formSubmitted = true;
    }
  }

}
