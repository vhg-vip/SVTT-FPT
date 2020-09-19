import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { IEntity } from './Modules/IEntity.Entity';
import { HttpService } from './Modules/HttpService.service';
import { ToasterService } from './Share/CustomToaster';
import { FilterEntity } from './Modules/Filter.Entity';
import { page } from './Share/Paging/Page';
import { LoginService } from './Modules/Login/Login.Service';
import { UserEntity } from './Modules/User/User.Entity';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { User } from './Modules/Login/User';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `
    <router-outlet></router-outlet>
    <!-- <app-loading></app-loading> -->
  `
})
export class AppComponent implements OnInit {
  currentUser: UserEntity;
  
  constructor(
    private router: Router, 
    private loginService: LoginService) { 
      // this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }
  
  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0);
    // });
    console.log(localStorage);
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
    
    if(this.currentUser == null){
      this.logout();
    }
    if(localStorage.length != 0){
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
    }
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}

export class CommonComponent<Entity extends IEntity> {

  Entities: Entity[] = [];
  searchEntity: FilterEntity = new FilterEntity();
  count: number = 0;
  Paging: page = new page();
  
  constructor(public httpService: HttpService<Entity>,
    public toastr: ToasterService,
  ) { }

  
  Get(SearchEntity: FilterEntity) {
    SearchEntity.Take = this.Paging.Take;
    SearchEntity.Skip = (this.Paging.active - 1) * SearchEntity.Take;
    // console.log(SearchEntity.Skip);
    let promise = new Promise((resolve, reject) => {
      this.httpService.Gets(SearchEntity).subscribe(res => {
        this.Entities = res;
        resolve(this.Entities);
      })
    })
    this.Count(SearchEntity);
    return promise;
  }

  Create(PostEntity: Entity) {
    this.httpService.Creates(PostEntity).subscribe(res => {
      this.toastr.showToaster('');
    }, err => {
      this.toastr.showToasterError('');
    })
  }

  Updates(entity: Entity) {
    this.httpService.Update(entity).subscribe(res => {
      this.toastr.showToaster('');
    }, err => {
      this.toastr.showToasterError('');
    })
  }

  Delete(entity: Entity) {
    this.httpService.Delete(entity).subscribe(res => {
      this.toastr.showToaster('');
    }, err => {
      this.toastr.showToasterError('');
    })
  }

  Count(searchEntity: FilterEntity) {
    this.httpService.Count(searchEntity).subscribe(res => {
      this.count = res;
    })
  }

  // kiem tra object rong
  checkEmptyObject(obj: any) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) return false;
    }
    return true;
  }

  HasOwnProperty(obj: any, key: string) {
    if (obj != null || obj != undefined) {
      return obj.hasOwnProperty(key);
    }
    else return false;
  }

  // kiem tra loi cua input
  checkError(a: any, obj: any, key: string, err: string) {
    if (a == null || a == undefined || a == "") {
      obj[key] = err;
    }
    else {
      delete obj[key];
    }
  }

  // tra ra loi cua input
  getError(obj: any, key: string) {
    if (this.HasOwnProperty(obj, key)) {
      return obj[key];
    }
    else return null;
  }
}
