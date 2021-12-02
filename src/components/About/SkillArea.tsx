import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text, arr }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="quaternary" width={100} height="20rem">
        {arr.map(bg => (
          <Bubble backgroundImage={bg} />
        ))}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
