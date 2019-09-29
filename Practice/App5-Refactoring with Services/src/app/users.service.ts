import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';
@Injectable()
export class UsersService {
  constructor(private counterService: CounterService) { }

  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  inactiveTrigger = new EventEmitter<string>();
  activeTrigger = new EventEmitter<string>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increaseToInactiveCount();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increaseToActiveCount();
  }
}
