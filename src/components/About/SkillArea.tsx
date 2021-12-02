import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text, arr }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="quaternary" width={60}>
        {arr.map(bg => (
          <Bubble
            backgroundImage={bg}
            size={Math.random() * 16 + 50}
            margin={Math.random() * 20 + 0}
          />
        ))}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
