import { AnimalContainer } from './styles';
import jelly from '../../images/jellyfish.png';
import whale from '../../images/whale.png';
import submarine from '../../images/submarine.png';
import shark from '../../images/shark.png';

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
      <img src={whale} alt="Whale" className="whale" data-aos="fade-left" />
      <img
        src={submarine}
        alt="Submarine"
        className="submarine"
        data-aos="fade-right"
      />
      <img src={shark} alt="Shark" className="shark" data-aos="fade-right" />
    </AnimalContainer>
  );
}

export default BackgroundAnimals;
