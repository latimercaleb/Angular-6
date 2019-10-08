import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService{
    activatedEmitter = new EventEmitter<boolean>(); // Old way, use the service to contain an event and then have another component subscribe and use the result from the stream, better way is to use a subject
}