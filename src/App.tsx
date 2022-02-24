import { useState } from 'react';

import { GlobalStyle } from './assets/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { AddTransactionModal } from './components/AddTransactionModal';

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
    <>
      <GlobalStyle />

      <AddTransactionModal
        isOpen={isAddTransactionModalOpen}
        onClose={handleAddTransactionModalClose}
      />

      <Header onOpenTransactionModal={handleAddTransactionModalOpen} />

      <Dashboard />
    </>
  );
}
