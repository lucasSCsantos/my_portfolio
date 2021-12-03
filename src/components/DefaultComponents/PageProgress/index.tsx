import Bar from './Bar';
import { Container } from './styles';

function PageProgress({ arr }) {
  return (
    <Container>
      {arr.map(width => (
        <Bar width={width} key={width} />
      ))}
    </Container>
  );
}

export default PageProgress;
