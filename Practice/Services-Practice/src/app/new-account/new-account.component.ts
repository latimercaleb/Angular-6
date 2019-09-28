import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 //  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    // Listen for custom event to react
    this.accountsService.statusUpdated.subscribe(
      (status: string) => console.log('Cross-comms event emitted status changed ' + status));
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName,accountStatus);
    // this.loggingService.logStatusChangeToConsole(accountStatus);
  }
}
