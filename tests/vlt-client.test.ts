import * as nock from 'nock';
import VltClient from '../src/';

beforeAll(() => {
  // Disable requests that are not mocked
  nock.disableNetConnect();
  nock.enableNetConnect('localhost');
});

afterAll(() => {
  nock.cleanAll();
  nock.enableNetConnect();
});

describe('VltClient', () => {
  const client = new VltClient({
    apiKey: 'abc123',
    apiSecret: 'abc1234',
    apiUrl: 'http://localhost:3000'
  });

  describe('.gateway', () => {
    describe('.list', () => {
      it('should be defined', () => {
        expect(client.gateway.list).toBeDefined();
      });
    });

    describe('.get', () => {
      it('should be defined', () => {
        expect(client.gateway.get).toBeDefined();
      });
    });

    describe('.create', () => {
      it('should be defined', () => {
        expect(client.gateway.create).toBeDefined();
      });
    });

    describe('.update', () => {
      it('should be defined', () => {
        expect(client.gateway.update).toBeDefined();
      });
    });

    describe('.redact', () => {
      it('should be defined', () => {
        expect(client.gateway.redact).toBeDefined();
      });
    });
  });

  describe('.paymentMethod', () => {
    describe('.list', () => {
      it('should be defined', () => {
        expect(client.paymentMethod.list).toBeDefined();
      });
    });

    describe('.get', () => {
      it('should be defined', () => {
        expect(client.paymentMethod.get).toBeDefined();
      });
    });

    describe('.create', () => {
      it('should be defined', () => {
        expect(client.paymentMethod.create).toBeDefined();
      });
    });

    describe('.update', () => {
      it('should be defined', () => {
        expect(client.paymentMethod.update).toBeDefined();
      });
    });

    describe('.redact', () => {
      it('should be defined', () => {
        expect(client.paymentMethod.redact).toBeDefined();
      });
    });
  });

  describe('.transaction', () => {
    describe('.list', () => {
      it('should be defined', () => {
        expect(client.transaction.list).toBeDefined();
      });
    });

    describe('.get', () => {
      it('should be defined', () => {
        expect(client.transaction.get).toBeDefined();
      });
    });

    describe('.purchase', () => {
      it('should be defined', () => {
        expect(client.transaction.purchase).toBeDefined();
      });
    });

    describe('.authorize', () => {
      it('should be defined', () => {
        expect(client.transaction.authorize).toBeDefined();
      });
    });

    describe('.capture', () => {
      it('should be defined', () => {
        expect(client.transaction.capture).toBeDefined();
      });
    });

    describe('.refund', () => {
      it('should be defined', () => {
        expect(client.transaction.refund).toBeDefined();
      });
    });

    describe('.void', () => {
      it('should be defined', () => {
        expect(client.transaction.void).toBeDefined();
      });
    });
  });
});
