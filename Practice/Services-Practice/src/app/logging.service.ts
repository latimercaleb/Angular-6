export class LoggingService{
    logStatusChangeToConsole(status: string){
        console.log(`A server status has been changed! The new status is: ${status}`);
    }
}