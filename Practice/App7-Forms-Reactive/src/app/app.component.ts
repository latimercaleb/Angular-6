import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appForm: FormGroup;
  statusCollection: String[];

  ngOnInit(){
    this.appForm = new FormGroup({
      'projectName': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
    this.statusCollection = ['Stable','Critcal','Finished'];
  }

  onSubmit(){
    console.log(this.appForm);
  }
}
