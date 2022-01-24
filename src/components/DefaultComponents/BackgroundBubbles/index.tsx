import { Container } from './styles';

interface BackgroundBubblesProps {
  size?: number;
}

const defaultProps = {
  size: 100
};

function BackgroundBubbles({ size }: BackgroundBubblesProps) {
  return (
    <Container size={size}>
      <div className="bubble bubble1" />
      <div className="bubble bubble2" />
      <div className="bubble bubble3" />
      <div className="bubble bubble4" />
      <div className="bubble bubble5" />
      <div className="bubble bubble6" />
      <div className="bubble bubble7" />
      <div className="bubble bubble8" />
      <div className="bubble bubble9" />
      <div className="bubble bubble10" />
      <div className="bubble bubble11" />
    </Container>
  );
}

BackgroundBubbles.defaultProps = defaultProps;

export default BackgroundBubbles;
