import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { UserEntity } from '../User/User.Entity';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from './User';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private currentUserSubject: BehaviorSubject<UserEntity>
    public currentUser: Observable<UserEntity>;
    public users: Array<UserEntity> = [];

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<UserEntity>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public getCurrentUserValue(): UserEntity {
        return this.currentUserSubject.value;
    }

    login(display: string, name: string) {
        return this.http.get<UserEntity[]>('https://testapi.fpt.com.vn/api/User').pipe(map(user => {
            this.users = user;
            // localStorage.setItem(display, JSON.stringify(name));
            return this.users;
        }))
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    signin(){
        
        // return this.http.post<any>(`https://testapi.fpt.com.vn/api/User`, { display, name })
        //     .pipe(map(user => {
        //         localStorage.setItem('currentUser', JSON.stringify(user));
        //         this.currentUserSubject.next(user);
        //         return user;
        //     }))
    }
}