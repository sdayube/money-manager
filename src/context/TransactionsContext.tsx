import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
  id: number;
  title: string;
  type: 'revenue' | 'expense';
  value: number;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => {
      console.log(response.data);
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
