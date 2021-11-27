import { Area } from '../DefaultComponents';
import { Container } from './styles';

function Hero() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%" />
      <Area backgroundColor="quaternary" width={55} height="100%" />
    </Container>
  );
}

export default Hero;
