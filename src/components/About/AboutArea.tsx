import { Heading, Text } from '../DefaultComponents';
import { AboutContainer } from './styles';

function AboutContent() {
  return (
    <AboutContainer>
      <Heading level={1} size="large" color="text">
        SOBRE MIM
      </Heading>
      <Text size="xsmall" color="text">
        Focado em aprendizado, estou sempre buscando me aprofundar mais no
        conhecimento. Estudo desenvolvimento web há mais de um ano, praticando
        com diversos projetos com ferramentas front-end e back-end. Meu
        propósito é facilitar a vida das pessoas através da tecnologia.
      </Text>
    </AboutContainer>
  );
}

export default AboutContent;
