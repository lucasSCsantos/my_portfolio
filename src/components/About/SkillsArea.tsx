import SkillArea from './SkillArea';
import { SkillsContainer } from './styles';
import { lenguages } from '../../images';

function SkillsArea() {
  return (
    <SkillsContainer>
      <SkillArea text="Frameworks" arr={lenguages} />
      <SkillArea text="Frameworks" arr={[]} />
      <SkillArea text="Frameworks" arr={[]} />
      <SkillArea text="Frameworks" arr={[]} />
    </SkillsContainer>
  );
}

export default SkillsArea;
