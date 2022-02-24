import { Logo } from '../Logo';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({onOpenTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo />
        <button
          type="button"
          onClick={onOpenTransactionModal}
        >
          Add transaction
        </button>
      </Content>
    </Container>
  );
}