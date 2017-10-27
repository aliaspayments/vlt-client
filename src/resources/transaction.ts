import BaseResource from './base';

export default class TransactionResource extends BaseResource {
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
