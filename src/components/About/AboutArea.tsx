import { Heading, Text } from '../DefaultComponents';
import { AboutContainer } from './styles';

function AboutContent() {
  return (
    <AboutContainer>
      <Heading level={1} size="large" color="text">
        SOBRE MIM
      </Heading>
      <Text size="xsmall" color="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dicta
        distinctio. Dolores, labore libero id modi adipisci, quis hic sapiente
        incidunt suscipit molestiae nisi distinctio magnam. Reprehenderit
        nesciunt debitis incidunt!
      </Text>
    </AboutContainer>
  );
}

export default AboutContent;
