import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Method 1 of retreiving query params, snapshot vals, snapshots don't react to change
    // console.log(`Query Params: ${this.route.snapshot.queryParams}`);
    // console.log(`Fragment Params: ${this.route.snapshot.fragment}`);
    // console.log(`The whole thing: ${this.route}`);

    // Method 2: Observables 
    this.route.queryParams.subscribe(
      (args: Params)=>{
        this.allowEdit = args['allowEdit'] == '1' ? true : false;
      });
    // this.route.fragment.subscribe((args)=>console.log("Query Params: " + args));
    
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
