import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../Share/CustomToaster';
import { CommonComponent } from '../../app.component';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorEntity } from '../../Modules/Vendor/Vendor.Entity';
import { VendorService } from '../../Modules/Vendor/Vendor.Service';
import { VendorSearchEntity } from '../../Modules/Vendor/Vendor.SearchEntity';

@Component({
    templateUrl: 'vendor.component.html'
})
export class VendorComponent extends CommonComponent<VendorEntity> implements OnInit{
    VendorEntities: VendorEntity[] = [];
    VendorSearchEntity: VendorSearchEntity;
    
    constructor(public VendorService: VendorService,
                public toastr: ToasterService,
                public route: ActivatedRoute,
                public router: Router) {
        super(VendorService, toastr);
        this.getVendor();
    }

    
    ngOnInit(){
        
    }

    getVendor(){
        this.Get(this.VendorSearchEntity).then((result: VendorEntity[]) => {
            this.VendorEntities = result;
            console.log(this.VendorEntities);
        })
    }

    
}