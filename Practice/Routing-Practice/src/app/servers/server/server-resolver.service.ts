import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface ServerType{
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<ServerType>{
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ServerType> | Promise<ServerType> | ServerType {
        const serverReturned: ServerType = this.serversService.getServer(+route.params['id']); // The + casts the string as an int
        console.log('Returning from resolver: ' + serverReturned);
        return serverReturned;
    }
}