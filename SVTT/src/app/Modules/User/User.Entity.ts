import { IEntity } from '../IEntity.Entity';

export class UserEntity extends IEntity{
    id: number;
    display: string;
    name: string;
    token: string;
    version: number;
    activeDirectoryId: string;
    isDeleted: boolean;
    language: string;
    groups: string;
    isEdit: boolean;
    body: any;
    username: string;
    password: string;
    constructor() {
        super();
    }
}