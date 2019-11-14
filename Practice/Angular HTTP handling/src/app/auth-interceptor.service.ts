import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor{
    // Runs a method on the incoming request, then calls a method to send the request back to it's path
    intercept(req: HttpRequest<any>,next: HttpHandler){
        console.log(req);
        console.log('Outbound Request intercepted!');
        return next.handle(req);
    }
}