import { Area, Heading } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import AboutContent from './AboutArea';
import BackgroundFishes from './BackgroundFishes';
import SkillsArea from './SkillsArea';
import { Container } from './styles';

function About() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        <AboutContent />
      </Area>
      <Area backgroundColor="primary" width={55} height="100%">
        <BackgroundFishes />
        <Heading level={1} size="large" fontWeight={1000} color="textLight">
          SKILLS
        </Heading>
        <SkillsArea />
      </Area>
      <BackgroundBubbles size={80} />
    </Container>
  );
}

export default About;
