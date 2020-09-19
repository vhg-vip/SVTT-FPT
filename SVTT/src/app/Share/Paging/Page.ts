import { OnChanges, Directive } from '@angular/core';

@Directive()
export class page implements OnChanges {
    id: number;
    isActived: boolean = false;
    show: boolean = true;
    Take: number = 5;
    TotalData: number = 0;
    TotalPages: number = 0;
    active: number = 1;
    Pages: page[] = [];
    VisiblePage: number = 5;
    constructor() {
    }

    ngOnChanges() {

    }

}