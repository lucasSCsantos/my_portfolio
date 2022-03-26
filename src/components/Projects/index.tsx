import { Area } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import BackgroundAnimals from './BackgroundAnimals';
import ProjectBubble from './ProjectBubble';
import ProjectInfo from './ProjectInfo';
import { Container } from './styles';

function Projects({ arr }) {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        {arr.map(({ description, name, id }) => (
          <ProjectInfo description={description} id={id} key={id} name={name} />
        ))}
      </Area>
      <Area backgroundColor="primary" width={55} height="100%">
        <BackgroundAnimals />
        {arr.map(({ techs, image, id, link }) => (
          <ProjectBubble
            techs={techs}
            image={image}
            key={id}
            id={id}
            link={link}
          />
        ))}
      </Area>
      <BackgroundBubbles size={590} />
    </Container>
  );
}

export default Projects;
