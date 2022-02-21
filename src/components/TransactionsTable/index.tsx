import { formatCurrency } from '../../helpers/formatCurrency';
import { Container } from './styles';

export function TransactionsTable() {
  const [desenvolvimento, aluguel] = [1200000, -300000];

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>{formatCurrency(desenvolvimento)}</td>
            <td>Desenvolvimento</td>
            <td>21/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdrawal'>{formatCurrency(aluguel)}</td>
            <td>Moradia</td>
            <td>21/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}