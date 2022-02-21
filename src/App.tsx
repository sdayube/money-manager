import { GlobalStyle } from './assets/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = '/api';

    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Desenvolvimento de website',
        value: 1200000,
        category: 'Desenvolvimento',
        date: '21/02/2021',
      },
      {
        id: 2,
        title: 'Aluguel',
        value: -300000,
        category: 'Moradia',
        date: '21/02/2021',
      },
    ]);
  }
});

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
