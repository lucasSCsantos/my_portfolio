import SkillArea from './SkillArea';
import { SkillsContainer } from './styles';
import { databases, frameworks, lenguages, others } from '../../images';

function SkillsArea() {
  return (
    <SkillsContainer>
      <SkillArea text="Linguagens" arr={lenguages} />
      <SkillArea text="Frameworks" arr={frameworks} />
      <SkillArea text="Bancos de dados" arr={databases} />
      <SkillArea text="Outros" arr={others} />
    </SkillsContainer>
  );
}

export default SkillsArea;
