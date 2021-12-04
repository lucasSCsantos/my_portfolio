import { Heading, Text } from '../DefaultComponents';
import { AboutContainer } from './styles';

function AboutContent() {
  return (
    <AboutContainer>
      <Heading level={1} size="large" color="text">
        SOBRE MIM
      </Heading>
      <Text size="xsmall" color="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue
        eros ac eros scelerisque, non consequat dolor convallis. Vestibulum
        accumsan rutrum convallis. Nulla malesuada, mauris a hendrerit mollis,
        tellus nunc consectetur justo, eget lobortis nunc risus id nisl.
      </Text>
    </AboutContainer>
  );
}

export default AboutContent;
