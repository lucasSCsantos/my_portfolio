import { Area } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import ProjectBubble from './ProjectBubble';
import { Container } from './styles';

function Projects({ arr }) {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%" />
      <Area backgroundColor="primary" width={55} height="100%">
        {arr.map(({ techs, image, id }) => (
          <ProjectBubble techs={techs} image={image} key={id} />
        ))}
      </Area>
      <BackgroundBubbles />
    </Container>
  );
}

export default Projects;
