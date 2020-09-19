import { Injectable } from "@angular/core";
import { HttpService } from '../HttpService.service';
import { UserEntity } from './User.Entity';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSearchEntity } from './User.SearchEntity';
import { map, tap, finalize } from 'rxjs/operators';
import { LoaderState } from '../../Share/Loading/Loader';
import { LoaderService } from '../../Share/Loading/Loader.service';

@Injectable({
    providedIn: 'root'
})

export class UserService extends HttpService<UserEntity> {
    isShowLoading: LoaderState;

    constructor(public http: HttpClient, loaderService: LoaderService) {
        super(http, loaderService);
        this.url = "api/User";
    }
}