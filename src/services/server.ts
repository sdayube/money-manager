import { createServer, Model } from 'miragejs';

export function makeServer() {
  createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Desenvolvimento de website',
            type: 'revenue',
            value: 1200000,
            category: 'Desenvolvimento',
            createdAt: new Date('02/21/2021'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'expense',
            value: -300000,
            category: 'Moradia',
            createdAt: new Date('02/21/2021'),
          },
        ]
      });
    },

    routes() {
      this.namespace = '/api';

      this.get('/transactions', (schema) => schema.all('transaction'));

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data);
      });
    }
  });
}