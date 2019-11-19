export class CounterService {
  
    toInactiveCount : number = 0;
    toActiveCount: number = 0;

    incrementActiveCount() {
        this.toActiveCount++;
        console.log('toActiveCount: ' + this.toActiveCount);
    }

    incrementInactiveCount() {
        this.toInactiveCount++;
        console.log('toInactiveCount: ' + this.toInactiveCount);
    }
}