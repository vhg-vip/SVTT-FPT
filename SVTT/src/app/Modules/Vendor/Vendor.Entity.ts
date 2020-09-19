import { IEntity } from '../IEntity.Entity';

export class VendorEntity extends IEntity {
    Id: string
    Name: string
    TaxCode: string
    Address: string
    Phone: string
    Email: string
    
    IsLock: boolean
    IsForeign: boolean
    Approved: boolean
    CreatedUserId: string
    CreatedUserEntity: {
        Id: string
        Display: string
        Name: string
        Version: number
        ActiveDirectoryId: string
        IsDeleted: boolean
        Groups: string
        Company: string
        Deleted: boolean
        Errors: {}
        ArrayErrors: []
    }
    VendorEmails: [
        {
            Id: string
            VendorId: string
            Email: string
            Deleted: boolean
            Errors: {}
            ArrayErrors: []
        }
    ]
    Deleted: boolean
    Errors: {}
    ArrayErrors: []
    constructor() {
        super();
    }
}