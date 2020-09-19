import { IEntity } from './../IEntity.Entity';
export class WeatherforecastEntity extends IEntity{
  date: string;
  temperatureC: number;
  temperatureF: Number;
  summary: string;

  constructor(){
    super();
  }
}
