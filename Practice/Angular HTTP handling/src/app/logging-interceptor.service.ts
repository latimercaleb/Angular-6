import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>,next: HttpHandler){
        console.log('Logging Intercepted');
        return next.handle(req).pipe(tap(
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