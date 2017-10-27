import {
  GatewayResource,
  PaymentMethodResource,
  TransactionResource
} from './resources';

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
