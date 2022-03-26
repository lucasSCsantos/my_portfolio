import { Area, Heading, Text } from '../DefaultComponents';
import { Container } from './styles';
import Waves from './Waves';

function Hero() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        <div className="heroTitle">
          <div className="titleCover" />
          <Heading level={1} size="large">
            OLÁ, EU SOU
            <br />
            LUCAS SANTANA
          </Heading>
          <Text size="small">DESENVOLVEDOR WEB FULL-STACK</Text>
        </div>
      </Area>
      <Area backgroundColor="quaternary" width={55} height="100%">
        <div className="heroSubtitle">
          <div className="subtitleCover" />
          <Heading level={1} size="large" color="textLight">
            ESSE É O MEU
            <br />
            PORTFÓLIO
          </Heading>
        </div>
        <Waves />
      </Area>
    </Container>
  );
}

export default Hero;
