import { FilterEntity } from '../Filter.Entity';

export class VendorSearchEntity extends FilterEntity {
    id: number;
    name: string;
    taxcode: string;
    address: string;
    vendorEmails: Array<any>;

    constructor(vendor: any = null) {
        super(vendor);
        this.id = vendor == null ? null : vendor.Id;
        this.name = vendor == null ? null : vendor.Name;
        this.taxcode = vendor == null ? null : vendor.TaxCode;
        this.address = vendor == null ? null : vendor.Address;
        this.vendorEmails = vendor == null ? null: vendor.VendorEmails;
    }
}