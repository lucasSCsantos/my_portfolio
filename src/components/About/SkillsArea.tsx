import SkillArea from './SkillArea';
import { SkillsContainer } from './styles';
import { databases, frameworks, lenguages, others } from '../../images';

function SkillsArea() {
  return (
    <SkillsContainer>
      <SkillArea text="Frameworks" arr={lenguages} />
      <SkillArea text="Frameworks" arr={[frameworks]} />
      <SkillArea text="Frameworks" arr={[databases]} />
      <SkillArea text="Frameworks" arr={[others]} />
    </SkillsContainer>
  );
}

export default SkillsArea;
