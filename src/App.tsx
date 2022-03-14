import { useState } from 'react';

import { GlobalStyle } from './assets/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { AddTransactionModal } from './components/AddTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [
    isAddTransactionModalOpen,
    setIsAddTransactionModalOpen
  ] = useState(false);

  function handleAddTransactionModalOpen() {
    setIsAddTransactionModalOpen(true);
  }

  function handleAddTransactionModalClose() {
    setIsAddTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <GlobalStyle />

      <AddTransactionModal
        isOpen={isAddTransactionModalOpen}
        onClose={handleAddTransactionModalClose}
      />

      <Header onOpenTransactionModal={handleAddTransactionModalOpen} />

      <Dashboard />
    </TransactionsProvider>
  );
}
