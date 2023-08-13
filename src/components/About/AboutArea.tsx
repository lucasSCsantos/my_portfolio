import { Heading, Text } from '../DefaultComponents';
import { AboutContainer } from './styles';

function AboutContent() {
  return (
    <AboutContainer>
      <Heading level={1} size="large" color="text">
        SOBRE MIM
      </Heading>
      <Text size="xsmall" color="text">
        Sou baiano de Salvador, tenho 22 anos e há 4 anos me dedico ao estudo de
        desenvolvimento de software. Atualmente atuo como desenvolvedor
        full-stack, mas no front-end é onde mais gosto de trabalhar. Entre
        minhas maiores conquistas na área eu me orgulho de um projeto voluntário
        da comunidade de e-sport que atualmente conta com mais de 25 mil
        usuários cadastrados. Gosto de trabalhar com pessoas e para as pessoas,
        buscando sempre entregar o melhor em todos os projetos.
      </Text>
    </AboutContainer>
  );
}

export default AboutContent;
