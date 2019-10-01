import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerInstance: Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    // Placeholder for logic here 
    // Access router via DI
    this.routerInstance.navigate(['/servers']);
  }

  onLoadServer(id: number){
    this.routerInstance.navigate(['/servers',id,'edit']);
    // this.routerInstance.navigate(['/servers',id,'edit'], {queryParams: {allowEdit: '1'}, fragment: 'Loading...'}); //  Adding query params and fragments
  }

}
