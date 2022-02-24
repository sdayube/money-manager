import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { closeImg, depositsImg, withdrawalsImg } from '../../assets/vectors'

import { Form, TypeWrapper, TypeButton } from './styles';

import { formatCurrency, parseCurrency } from '../../helpers/formatCurrency';
import { api } from '../../services/api';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('#root');

export function AddTransactionModal(props: AddTransactionModalProps) {
  const { isOpen, onClose } = props;

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type, setType] = useState('revenue');
  const [category, setCategory] = useState('');

  function handleAddTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      value: type === 'revenue' ? value : -value,
      type,
      category,
    };

    api.post('transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button type="button" className="modal-close" onClick={onClose}>
        <img src={closeImg} alt="Cancelar nova transação" />
      </button>

      <Form>
        <h2>New Transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Value"
          value={formatCurrency(value)}
          onChange={e => setValue(parseCurrency(e.target.value))}
        />

        <TypeWrapper>
          <TypeButton
            type="button"
            onClick={() => setType('revenue')}
            selected={type === 'revenue'}
            activeColor="green"
          >
            <img src={depositsImg} alt="" aria-hidden />
            <span>Revenue</span>
          </TypeButton>

          <TypeButton
            type="button"
            onClick={() => setType('expense')}
            selected={type === 'expense'}
            activeColor="red"
          >
            <img src={withdrawalsImg} alt="" aria-hidden />
            <span>Expense</span>
          </TypeButton>
        </TypeWrapper>

        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit" onSubmit={handleAddTransaction}>
          Add Transaction
        </button>
      </Form>
    </Modal>
  );
}
