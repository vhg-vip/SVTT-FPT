import { FilterEntity } from './../Filter.Entity';
export class SearchWeatherforecastEntity extends FilterEntity{
  temperatureC: number;
  temperatureF: Number;
  summary: string;
  constructor(Weatherforecast: any = null){
    super(Weatherforecast)
    this.temperatureC = Weatherforecast == null ? null : Weatherforecast.temperatureC;
    this.temperatureF = Weatherforecast == null ? null : Weatherforecast.temperatureF;
    this.summary = Weatherforecast == null ? null : Weatherforecast.summary;
  }
}
