import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './Login.Service';

@Injectable({
    providedIn: 'root'
})

export class LoginAuthGuard implements CanActivate {

    constructor(
        private router: Router, 
        private loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = this.loginService.getCurrentUserValue();
        if(currentUser){
            return true;
        }
        this.router.navigate(['/login'], {queryParams: {returnUrl: state}});
        return false;
    }

}