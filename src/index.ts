// tslint:disable: max-classes-per-file
import * as request from 'request-promise-native';

export abstract class BaseResource {
  protected request: request.RequestPromise;

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

export class GatewayResource extends BaseResource {
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

export class PaymentMethodResource extends BaseResource {
  protected basePath: string = 'payment_methods';

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

export class TransactionResource extends BaseResource {
  protected basePath: string = 'transactions';

  public list() {
    return this.request.get(this.basePath);
  }

  public get(resourceId: string) {
    const url = `${this.basePath}/${resourceId}`;
    return this.request.get(url);
  }

  public purchase(data: any) {
    const url = `${this.basePath}/purchase`;
    return this.request.post(url, { body: data });
  }

  public refund(transactionId: string, data: any) {
    const url = `${this.basePath}/${transactionId}/refund`;
    return this.request.post(url, { body: data });
  }

  public void(transactionId: string, data: any) {
    const url = `${this.basePath}/${transactionId}/void`;
    return this.request.post(url, { body: data });
  }
}

export interface VltClientOptions {
  apiKey: string;
  apiSecret: string;
  apiUrl?: string;
}

export default class VltClient {
  public gateway: GatewayResource;
  public paymentMethod: PaymentMethodResource;
  public transaction: TransactionResource;

  private apiKey: string;
  private apiSecret: string;
  private apiUrl: string = 'http://localhost:3000';

  constructor(options: VltClientOptions) {
    this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;

    if (options.apiUrl) {
      this.apiUrl = options.apiUrl;
    }

    this.gateway = new GatewayResource({
      apiKey: this.apiKey,
      apiSecret: this.apiSecret,
      apiUrl: this.apiUrl
    });

    this.paymentMethod = new PaymentMethodResource({
      apiKey: this.apiKey,
      apiSecret: this.apiSecret,
      apiUrl: this.apiUrl
    });

    this.transaction = new TransactionResource({
      apiKey: this.apiKey,
      apiSecret: this.apiSecret,
      apiUrl: this.apiUrl
    });
  }
}
