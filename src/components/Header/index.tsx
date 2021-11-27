import { Area } from '../DefaultComponents';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        <ul>
          <NavLink text="Lucas Santana" />
          <NavLink text="Sobre Mim" path="#sobre" />
          <NavLink text="Projetos" path="#projetos" />
          <NavLink text="Contato" path="#contato" />
        </ul>
      </Area>
      <Area backgroundColor="transparent" width={55} height={7.5} />
    </Container>
  );
}

export default Header;
