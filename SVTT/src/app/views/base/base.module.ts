// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CardsComponent } from './cards.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

import { TableComponent } from './table.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion'
import { TreeTableModule } from 'primeng/treetable'
import { TreeNode } from 'primeng/api'
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from '../../Share/Loading/Loading.component';
import { PagingComponent, PagingModule } from '../../Share/Paging/Paging.component';
import { InputCustomModule } from '../../Share/InputCustom/InputCustom.component';
import { VendorComponent } from './vendor.component';
import { WebcamComponent } from './webcam.component';
import {TreeModule} from 'primeng/tree';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    ToastrModule.forRoot(),
    AccordionModule,
    TreeTableModule,
    PagingModule,
    InputCustomModule,
    TreeModule
  ],
  exports: [
  ],
  declarations: [
    CardsComponent,
    TableComponent,
    VendorComponent,
    WebcamComponent
  ]
})
export class BaseModule { }
