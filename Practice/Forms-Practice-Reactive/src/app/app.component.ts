import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  newUserForm: FormGroup;
  forbiddenUserNames = ['Tom','Jerry']; // Throw error if you use these names

  ngOnInit(){ // Define the formgroup via the hook
    this.newUserForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesCheck.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log('Submitted');
    console.log(this.newUserForm);
  }

  onAddHobby(){
    (<FormArray>this.newUserForm.get('hobbies')).push(new FormControl(null, Validators.required)); // Need to cast the return from get as a FormArray, (<Type>) is an explicit cast in TS 
  }

  //custom validator
  forbiddenNamesCheck(control: FormControl): {[key: string]: boolean}{ // returns a typescript object of {string, boolean} like {'map': true} meaning it's invalid, otherwise it returns nothing
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }
}
