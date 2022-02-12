import { Logo } from '../Logo';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button">
          Add transaction
        </button>
      </Content>
    </Container>
  );
}