import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSave: boolean = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

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
    
    const id = parseInt(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(parseInt(params['id']));
      }
    );
 
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSave = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){return true;}
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&!this.changesSave) {
      return confirm('Are you sure you want to discard changes?');
    }else{
      return true;
    }
  }

}
