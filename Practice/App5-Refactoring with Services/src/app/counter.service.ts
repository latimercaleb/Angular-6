export class CounterService {
  private inactiveToActiveCount: number;
  private activeToInactiveCount: number;
  private totalChangeCount: number; 

  constructor() {
    this.inactiveToActiveCount = 0;
    this.activeToInactiveCount = 0;
    this.totalChangeCount = 0;
  }

  increaseToActiveCount(){
    this.inactiveToActiveCount += 1;
    this.updateTotalCount();
  }

  increaseToInactiveCount(){
    this.activeToInactiveCount += 1;
    this.updateTotalCount(); 
  }

  updateTotalCount(){
    this.totalChangeCount = this.inactiveToActiveCount + this.activeToInactiveCount;
  }
}
