import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

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
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // Listen for events, fire on every form change
    // this.newUserForm.valueChanges.subscribe(
    //   (value) => {console.log(value);}
    // );

    // Listen for events, fire on every form status change, when using async validators, the pending phase is easily monitorable here
     this.newUserForm.statusChanges.subscribe(
      (value) => {console.log(value);}
     );

     // setValue, patchValue & reset also work in reactive forms the same way they work in template driven forms
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

  // Async validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
