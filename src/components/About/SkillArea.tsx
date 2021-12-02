import { Area, Heading } from '../DefaultComponents';
import { SkillContainer, Bubble } from './styles';

function SkillArea({ text, arr }) {
  return (
    <SkillContainer>
      <Heading level={2} size="normal" color="textLight" fontWeight={1000}>
        {text}
      </Heading>
      <Area backgroundColor="transparent" width={50}>
        {arr.map(({ id, bg, name, size }, index) => (
          <Bubble
            key={id}
            backgroundImage={bg}
            size={size}
            margin={Math.random() * 20 + 10}
            float={Math.random() * -8 - 8}
            zindex={arr.length - index}
          >
            <div className="popover">
              {name}
              <div className="triangle" />
            </div>
          </Bubble>
        ))}
      </Area>
    </SkillContainer>
  );
}

export default SkillArea;
