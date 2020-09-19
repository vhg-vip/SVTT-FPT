import { Component, Input } from "@angular/core";
import { navItems, NavData } from '../../_nav';

@Component({
    selector: 'app-menu',
    templateUrl: 'Menu.component.html',
    styleUrls: ['Menu.component.scss']
})

export class MenuComponent {
    public NavItems = navItems;
    @Input() showMenu :boolean = false; 

    constructor(){
    }

    viewChildren(check: NavData){
        if(check.divider == true) check.divider = false;
        else check.divider = true;
    }

}