import { Area } from '../DefaultComponents';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%" />
      <Area backgroundColor="text" width={55} height={7.5} />
    </Container>
  );
}

export default Header;
