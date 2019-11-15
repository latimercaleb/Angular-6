import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    // Runs a method on the incoming request, then calls a method to send the request back to it's path
    intercept(req: HttpRequest<any>,next: HttpHandler){
        console.log('Auth intercepted!');
        const newRq = req.clone({headers: req.headers.append('TestingNewHeader', 'Falcon Armor')});
        return next.handle(newRq);
    }
}