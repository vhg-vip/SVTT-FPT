import { SearchWeatherforecastEntity } from './Weatherforecast.SearchEntity';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherforecastEntity } from './Weatherforecast.Entity';
import { HttpService } from './../HttpService.service';
import { Observable } from 'rxjs';
import { FilterEntity } from '../Filter.Entity';
import {finalize, tap, map} from 'rxjs/operators';
import { LoaderService } from '../../Share/Loading/Loader.service';

@Injectable({
  providedIn: 'root'
})

export class WeatherforecastService extends HttpService<WeatherforecastEntity>{
  constructor(public Http: HttpClient, loaderService: LoaderService) {
      super(Http, loaderService);
      this.url = "weatherforecast";
  }

}
