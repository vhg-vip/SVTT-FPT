import { FilterEntity } from '../Filter.Entity';

export class UserSearchEntity extends FilterEntity {
    id: number;
    display: string;
    name: string;

    constructor(User: any = null) {
        super(User);
        this.id = User == null ? null : User.id;
        this.display = User == null ? null : User.display;
        this.name = User == null ? null : User.name;
    }
}