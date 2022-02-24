import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

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
          created_at: new Date('21/02/2021'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'expense',
          value: -300000,
          category: 'Moradia',
          created_at: new Date('21/02/2021'),
        },
      ]
    });
  },

  routes() {
    this.namespace = '/api';

    this.get('/transactions', (schema) => schema.db.transactions);

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
