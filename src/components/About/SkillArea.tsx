import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="quaternary" width={100} height="20rem">
        {/* <Bubble /> */}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
