import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    // Runs a method on the incoming request, then calls a method to send the request back to it's path
    intercept(req: HttpRequest<any>,next: HttpHandler){
        console.log(req);
        console.log('Outbound Request intercepted!');
        const newRq = req.clone({headers: req.headers.append('TestingNewHeader', 'Falcon Armor')});
        return next.handle(newRq).pipe(tap(
            evt => {
                console.log(evt);
                if (evt.type === HttpEventType.Response){
                    console.log('It\'s a response!');
                    console.log(evt.body);
                }
            }
        ));
    }
}