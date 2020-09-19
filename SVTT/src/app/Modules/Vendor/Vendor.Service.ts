import { Injectable } from "@angular/core";
import { HttpService } from '../HttpService.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoaderState } from '../../Share/Loading/Loader';
import { LoaderService } from '../../Share/Loading/Loader.service';
import { VendorEntity } from './Vendor.Entity';

@Injectable({
    providedIn: 'root'
})

export class VendorService extends HttpService<VendorEntity> {
    isShowLoading: LoaderState;

    constructor(public http: HttpClient, loaderService: LoaderService) {
        super(http, loaderService);
        this.url = "https://konggw.ho.fpt.vn/demo/api/Vendors";
    }
}
