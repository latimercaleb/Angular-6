import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  selectedServer: number;
  serverObs: Subscription;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedServer = parseInt(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(this.selectedServer);
    this.serverObs = this.route.params.subscribe(
      (ParamsArray: Params) => {
        this.selectedServer = parseInt(ParamsArray['id']);
        this.server = this.serversService.getServer(this.selectedServer);
      }
    );
  }

  ngOnDestroy(){
    this.serverObs.unsubscribe();
  }

  onEdit(){
    // Navigate to the edit server component, pass the query params
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
