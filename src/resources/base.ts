import * as request from 'request-promise-native';

export default class BaseResource {
  protected request: request;

  constructor(options: { apiKey: string; apiSecret: string; apiUrl: string }) {
    this.request = request.defaults({
      baseUrl: options.apiUrl,
      json: true,
      auth: {
        username: options.apiKey,
        password: options.apiSecret
      }
    });
  }
}
