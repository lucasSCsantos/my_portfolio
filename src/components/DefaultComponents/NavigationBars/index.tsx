import Bar from './Bar';
import { Container } from './styles';

function NavigationBars({ arr }) {
  return (
    <Container>
      {arr.map(({ width, areaName, limit }) => (
        <Bar width={width} name={areaName} key={width} limit={limit} />
      ))}
    </Container>
  );
}

export default NavigationBars;
