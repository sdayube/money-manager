import { useContext } from 'react';
import { Container } from './styles';
import { depositsImg, withdrawalsImg, totalImg } from '../../assets/vectors';
import { formatCurrency } from '../../helpers/formatters';
import { TransactionsContext } from '../../context/TransactionsContext';

export function Summary() {
  const { transactions }= useContext(TransactionsContext);

  const total = transactions.reduce((acc, val) => acc + val.value, 0);

  const deposits = transactions
    .filter(transaction => transaction.type === 'revenue')
    .reduce((acc, transaction) => acc + transaction.value, 0);
  
  const withdrawals = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.value, 0);

  return(
    <Container>
      <div>
        <header>
          <p>Deposits</p>
          <img src={depositsImg} alt="" aria-hidden />
        </header>
        <strong>
          {formatCurrency(deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={withdrawalsImg} alt="" aria-hidden />
        </header>
        <strong>
          {formatCurrency(withdrawals)}
        </strong>
      </div>
      <div className={[
        'highlight-background',
        total >= 0 ? 'positive' : 'negative',
      ].join(' ')}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" aria-hidden />
        </header>
        <strong>
          {formatCurrency(total)}
        </strong>
      </div>
    </Container>
  );
}
