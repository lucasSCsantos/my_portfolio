import { Area, Heading } from '../DefaultComponents';
import SkillsArea from './SkillsArea';
import { Container } from './styles';

function About() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%" />
      <Area backgroundColor="primary" width={55} height="100%">
        <Heading level={1} size="large" fontWeight={1000} color="textLight">
          SKILLS
        </Heading>
        <SkillsArea />
      </Area>
    </Container>
  );
}

export default About;
