import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text, arr }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="quaternary" width={60}>
        {arr.map(({ id, bg }) => (
          <Bubble
            key={id}
            backgroundImage={bg}
            size={Math.floor(Math.random() * 20 + 50)}
            margin={Math.random() * 20 + 10}
            float={Math.random() * -11 - 8}
          />
        ))}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
