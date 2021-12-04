import Bar from './Bar';
import { Container } from './styles';

function NavigationBars({ arr }) {
  return (
    <Container>
      {arr.map(({ width, areaName }) => (
        <Bar width={width} name={areaName} key={width} />
      ))}
    </Container>
  );
}

export default NavigationBars;
