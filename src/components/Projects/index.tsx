import { Area } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%" />
      <Area backgroundColor="primary" width={55} height="100%" />
      <BackgroundBubbles />
    </Container>
  );
}

export default Projects;
