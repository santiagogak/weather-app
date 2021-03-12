import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenweatherDataSource} from '../datasources';

export interface OpenWeatherSrv {
  getCity(city_name: string): Promise<object>;
}

export class OpenWeatherSrvProvider implements Provider<OpenWeatherSrv> {
  constructor(
    // openweather must match the name property in the datasource json file
    @inject('datasources.openweather')
    protected dataSource: OpenweatherDataSource = new OpenweatherDataSource(),
  ) {}

  value(): Promise<OpenWeatherSrv> {
    return getService(this.dataSource);
  }
}
