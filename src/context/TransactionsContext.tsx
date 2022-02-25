import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

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

interface TransactionsContextData {
  transactions: Transaction[];
  addTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => {
      console.log(response.data);
      setTransactions(response.data.transactions);
    });
  }, []);

  async function addTransaction(transactionInput: TransactionInput) {
    if (transactionInput.type === 'expense') {
      transactionInput.value = -transactionInput.value
    };

    const response = await api.post('transactions', {...transactionInput, createdAt: new Date()});
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
