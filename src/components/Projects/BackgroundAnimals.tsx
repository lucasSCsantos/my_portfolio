import { AnimalContainer } from './styles';
import jelly from '../../images/jellyfish.png';

function BackgroundAnimals() {
  return (
    <AnimalContainer>
      <img
        src={jelly}
        alt="Jelly Fish"
        className="jellyfish1"
        data-aos="fade-left"
      />
      <img
        src={jelly}
        alt="Jelly Fish"
        className="jellyfish2"
        data-aos="fade-right"
      />
      <img
        src={jelly}
        alt="Jelly Fish"
        className="jellyfish3"
        data-aos="fade-left"
      />
    </AnimalContainer>
  );
}

export default BackgroundAnimals;
