import { SiGithub, SiLinkedin } from 'react-icons/si';
import React from 'react';
import { Area } from '../DefaultComponents';
import IconLink from './IconLink';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  const GIT_HUB = 'https://github.com/lucasSCsantos';
  const LINKEDIN = 'https://www.linkedin.com/in/lucas-sc-santos/';

  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        <ul className="navLinks">
          <NavLink text="Lucas Santana" />
          <NavLink text="Sobre Mim" path="#sobre" />
          <NavLink text="Projetos" path="#projetos" />
          <NavLink text="Contato" path="#contato" />
        </ul>
      </Area>
      <Area backgroundColor="transparent" width={55} height="100%">
        <ul className="iconLinks">
          <IconLink path={GIT_HUB}>
            <SiLinkedin />
          </IconLink>
          <IconLink path={LINKEDIN}>
            <SiGithub />
          </IconLink>
        </ul>
      </Area>
    </Container>
  );
}

export default Header;
