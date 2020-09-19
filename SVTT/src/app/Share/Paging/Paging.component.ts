import { Component, NgModule, Output, EventEmitter, Input, OnChanges, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { page } from './Page';
import { style } from '@angular/animations';

@Component({
  selector: 'app-paging',
  templateUrl: 'Paging.component.html',
  styleUrls: ['Paging.component.scss']
})

export class PagingComponent implements OnChanges, OnInit {

  @Input() Page: page;
  @Input() totalData: number;
  @Input() linkRoute: string;
  @Output() onChange: EventEmitter<page> = new EventEmitter<page>();

  options = [5,10,20];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if(this.Page.Take == undefined) this.router.navigate([this.linkRoute], { queryParams: { page: 1, Take: 5 } });
    this.route.queryParams.subscribe(
      params => {
        this.Page.active = params['page'];
        this.Page.Take = params['Take'];
      }
    )
  }

  ngOnChanges() {
    this.Page.TotalData = this.totalData;
    if(this.Page.Take == undefined) this.Page.Take = 5;
     this.Reload();
  }

  navigate() {
    if (this.Page.active > 0) {
      this.router.navigate([this.linkRoute], { queryParams: { page: this.Page.active, Take: this.Page.Take } });
    }
  }

  Reload() {
    if (this.Page.active > 0) this.Page.active--;
    else this.Page.active = 0;
    this.Page.Pages = [];
    this.Page.TotalPages = Math.ceil(this.Page.TotalData / this.Page.Take);
    for (let i = 0; i < this.Page.TotalPages; i++) {
      this.Page.Pages[i] = new page();
      this.Page.Pages[i].id = i + 1;
    }
    if (this.Page.TotalPages > 0) this.pagingActive(this.Page.active);
  }

  pagingActive(index: number) {
    for (let i = 0; i < this.Page.TotalPages; i++) {
      this.Page.Pages[i].isActived = false;
      this.Page.Pages[i].show = false;
    }
    this.Page.Pages[index].isActived = true;
    this.Page.Pages[index].show = true;
    this.Page.active = this.Page.Pages[index].id;
    if (this.Page.TotalPages < this.Page.VisiblePage) {
      for (let i = 0; i < this.Page.TotalPages; i++) {
        this.Page.Pages[i].show = true;
      }
    }
    else {
      if (this.Page.active - 2 > 0 && this.Page.active + 1 < this.Page.TotalPages) {
        for (let i = this.Page.active - 3; i < this.Page.active + 2; i++) {
          this.Page.Pages[i].show = true;
        }
      }
      else if (this.Page.active - 2 <= 0) {
        for (let i = 0; i < this.Page.VisiblePage; i++) {
          this.Page.Pages[i].show = true;
        }
      }
      else if (this.Page.active + 2 >= this.Page.TotalPages) {
        for (let i = this.Page.TotalPages - this.Page.VisiblePage; i < this.Page.TotalPages; i++) {
          this.Page.Pages[i].show = true;
        }
      }
    }
    this.onChange.emit(this.Page);

  }

  NextPage() {
    if (this.Page.active < this.Page.TotalPages) {
      this.Page.active++;
      this.pagingActive(this.Page.active - 1);
    }
  }

  PreviousPage() {
    if (this.Page.active > 1) {
      this.Page.active--;
      this.pagingActive(this.Page.active - 1);
    }
  }

  FirstPage() {
    this.Page.active = 0;
    this.pagingActive(this.Page.active);
  }

  LastPage() {
    this.Page.active = this.Page.TotalPages - 1;
    this.pagingActive(this.Page.active);
  }

  ChangePage(event: any) {
    this.Page.Take = event.target.value;
    this.Page.active = 0;
    this.Reload();
  }
}

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    PagingComponent
  ],
  declarations: [
    PagingComponent
  ]
})
export class PagingModule { }
