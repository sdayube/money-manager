import { Container } from './styles';
import { depositsImg, withdrawalsImg, totalImg } from '../../assets/vectors';
import { formatCurrency } from '../../helpers/formatCurrency';

export function Summary() {
  const [deposits, withdrawals, total] = [200, 100, 100];

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
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
