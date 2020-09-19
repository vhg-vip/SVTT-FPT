import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Modules/Login/Login.Service';
import { ActivatedRoute, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserEntity } from '../../Modules/User/User.Entity';

@Component({
    selector: 'app-login',
    templateUrl: 'Login.component.html',
    styleUrls: ['Login.component.scss']
})

export class LoginComponent /*implements OnInit*/{

    // userlogin = {
    //     username: null,
    //     password: null
    // }
    submited: boolean = false;
    isAuthenticated: boolean;
    userData: any;
    returnUrl:string;
    loginForm: FormGroup;
    userAccount: Array<UserEntity> = [];
    checkLogin: boolean = false;
    errorLogin: string;
    userCurrentId: number;

    constructor(
        private loginService: LoginService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        // public oidcSecurityService: OidcSecurityService
    ) {
        if(this.loginService.getCurrentUserValue()){
            this.router.navigate(['/']);
        }
        // if(this.oidcSecurityService.moduleSetup){
        //     this.doCallbackLogicIfRequire();
        // }
        // else{
        //     this.oidcSecurityService.onModuleSetup.subscribe( () => {
        //         this.doCallbackLogicIfRequire();
        //     });
        // }
    }

    ngOnInit(){
        // this.oidcSecurityService.getIsAuthorized().subscribe( (auth) => {
        //     this.isAuthenticated = auth;
        // });

        // this.oidcSecurityService.getUserData().subscribe( (userData) => {
        //     this.userData = userData;
        // })
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() {
        return this.loginForm.controls;
    }

    // login(){
    //     this.oidcSecurityService.authorize();
    // }
    // logout(){
    //     this.oidcSecurityService.logoff();
    // }

    onSubmit(){
        this.submited = true;
        if(this.loginForm.invalid){
            return;
        }
        this.loginService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
            data => {
                console.log(data);
                this.userAccount = data;
                for(let user of this.userAccount){
                    if(user.display == this.f.username.value && user.name == this.f.password.value){
                        this.checkLogin = true;
                        this.userCurrentId = user.id;
                        break;
                    }
                }
                if(this.checkLogin){
                    localStorage.setItem('currentUser', JSON.stringify({id: this.userCurrentId, username: this.f.username.value, password: this.f.password.value}));
                    this.errorLogin = "";
                    this.router.navigate([this.returnUrl]);
                } 
                else{
                    this.errorLogin = "username or password is wrong."
                } 
            },
            error => {
                console.log("error login");
            }
        )
    }

    private doCallbackLogicIfRequire(){
        // if(window.location.hash){
        //     this.oidcSecurityService.authorizedImplicitFlowCallback();
        // }
    }
}