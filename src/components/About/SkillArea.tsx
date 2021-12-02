import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text, arr }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="transparent" width={50}>
        {arr.map(({ id, bg, name }) => (
          <Bubble
            key={id}
            backgroundImage={bg}
            size={Math.floor(Math.random() * 16 + 50)}
            margin={Math.random() * 20 + 10}
            float={Math.random() * -8 - 8}
          >
            <div>{name}</div>
          </Bubble>
        ))}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
