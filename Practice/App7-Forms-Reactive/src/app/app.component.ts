import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appForm: FormGroup;
  statusCollection: String[];
  formRender: {'name': string, 'email': string, 'status': string};
  submitted: boolean;
  ngOnInit(){
    this.appForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required, this.nameIsNotAllowed]),
      'email': new FormControl(null,[Validators.required, Validators.email], this.emailIsNotAllowed),
      'status': new FormControl('Stable')
    });
    this.statusCollection = ['Stable','Critcal','Finished'];
    this.formRender = {
      'name': "",
      "email": "",
      "status": ""
    };
    this.submitted = true;
  }

  nameIsNotAllowed(inputControl: FormControl): {[key: string]: boolean}{
    if(inputControl.value){
      let lowercaseInputVal = inputControl.value.toLowerCase();
      if(lowercaseInputVal === 'test'){
        return {'nameIsNotAllowed': true};
      }
    }else{
      return null;
    }
  }

  emailIsNotAllowed(inputControl: FormControl):Promise<any> | Observable<any> {
    let emailNameAndDomain = inputControl.value.split('@');
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(emailNameAndDomain[0].toLowerCase() === 'test'){
          resolve({'emailUserNameIsNotAllowed': true});
        }else if (emailNameAndDomain[1].toLowerCase().indexOf('test') !== -1){
          resolve({'emailDomainNameIsNotAllowed': true});
        }
        else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit(){
    debugger;
    console.log(this.appForm);
    if(this.appForm.valid){
      this.formRender.name = this.appForm.get('projectName').value;
      this.formRender.email = this.appForm.get('email').value;
      this.formRender.status = this.appForm.get('status').value;
      this.appForm.reset({'status': 'Stable'});
    }
  }
}
