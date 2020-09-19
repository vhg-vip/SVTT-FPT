import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, onErrorResumeNext } from 'rxjs';
import { LoginService } from './Login.Service';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let currentUser = this.loginService.getCurrentUserValue();
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
    
    

}