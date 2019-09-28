import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";
@Injectable() // Needed since logging service is now injected here
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService){}

  statusUpdated = new EventEmitter<string>(); // New custom event can be emitted from anywhere using the service injection

  addAcount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChangeToConsole(status);
  }
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChangeToConsole(status);
  }
}
