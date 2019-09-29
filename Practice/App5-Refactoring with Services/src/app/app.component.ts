import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] =[];
  lastUserLogging: {userChanged: string,timeString: string} = {userChanged:'',timeString:''};
  constructor(private usersService: UsersService){
    this.usersService.inactiveTrigger.subscribe(
      (lastPersonChanged: string) => {
        this.makeTimeString(lastPersonChanged)
      });
    this.usersService.activeTrigger.subscribe(
      (lastPersonChanged: string) =>{
        this.makeTimeString(lastPersonChanged)
      });
  }
  
  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  makeTimeString(lastUserName: string){
    this.lastUserLogging.userChanged = lastUserName;
    this.lastUserLogging.timeString = new Date().toLocaleTimeString('en-US');
  }
}
