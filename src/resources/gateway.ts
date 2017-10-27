import BaseResource from './base';

export default class GatewayResource extends BaseResource {
  protected basePath: string = '/gateways';

  public list() {
    return this.request.get(this.basePath);
  }

  public get(resourceId: string) {
    const url = `${this.basePath}/${resourceId}`;
    return this.request.get(url);
  }

  public create(data: any) {
    const url = this.basePath;
    return this.request.post(url, { body: data });
  }

  public update(resourceId: string, data: any) {
    const url = `${this.basePath}/${resourceId}`;
    return this.request.patch(url, data);
  }

  public redact(gatewayId: string) {
    return this.request.put(`${this.basePath}/${gatewayId}`);
  }
}
