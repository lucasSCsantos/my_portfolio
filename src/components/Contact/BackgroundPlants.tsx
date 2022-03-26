import { PlantsContainer } from './styles';
import plant from '../../images/plant.png';
import anchor from '../../images/anchor.png';

function BackgroundPlants() {
  return (
    <PlantsContainer>
      <img src={plant} alt="Plant" className="plant1" />
      <img src={plant} alt="Plant" className="plant2" />
      <img src={plant} alt="Plant" className="plant3" />
      <img src={anchor} alt="Anchor" className="anchor" />
    </PlantsContainer>
  );
}

export default BackgroundPlants;
