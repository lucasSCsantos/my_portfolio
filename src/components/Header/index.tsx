import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Area } from '../DefaultComponents';
import IconLink from './IconLink';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45}>
        <ul className="navLinks">
          <NavLink text="Lucas Santana" />
          <NavLink text="Sobre Mim" path="#sobre" />
          <NavLink text="Projetos" path="#projetos" />
          <NavLink text="Contato" path="#contato" />
        </ul>
      </Area>
      <Area backgroundColor="transparent" width={55}>
        <ul className="iconLinks">
          <IconLink path="https://www.linkedin.com/in/lucas-sc-santos/">
            <SiLinkedin />
          </IconLink>
          <IconLink path="https://github.com/lucasSCsantos">
            <SiGithub />
          </IconLink>
        </ul>
      </Area>
    </Container>
  );
}

export default Header;
