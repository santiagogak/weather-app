// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {param, get} from '@loopback/rest';
import {OpenWeatherSrv} from '../services';


export class OpenWeatherCtrlController {
  constructor(
    @inject('services.OpenWeatherSrv')
    protected openWeatherSrv: OpenWeatherSrv,
  ) {}

  @get('/weather/{city_name}')
  async getCity(
    @param.path.string('city_name') city_name: string,
  ): Promise<object> {
    //Preconditions
    return this.openWeatherSrv.getCity(city_name);
  }
}
