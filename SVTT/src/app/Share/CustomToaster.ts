import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: "root"
})
export class ToasterService {
    constructor(public ToasterService: ToastrService) {
        
    }

    showToaster(message) {
        this.ToasterService.success(message,"Success");
    }
    showToasterError(message) {
        this.ToasterService.error(message,"Error");
    }
}