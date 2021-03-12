import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'openweather',
  connector: 'rest',
  baseURL: 'http://api.openweathermap.org/data/2.5',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid=c7f17d3147a8216c6912a40e6fca3be5&units=metric',
      },
      functions: {
        getCity: ['city_name'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OpenweatherDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'openweather';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.openweather', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
