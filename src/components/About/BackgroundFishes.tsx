import { FishContainer } from './styles';
import fish1 from '../../images/fish1.png';
import fish2 from '../../images/fish2.png';
import fish3 from '../../images/fish3.png';

function BackgroundFishes() {
  return (
    <FishContainer>
      <img src={fish1} alt="fish" className="fish1" data-aos="fade-right" />
      <img src={fish2} alt="fish" className="fish2" data-aos="fade-left" />
      <img src={fish3} alt="fish" className="fish3" data-aos="fade-left" />
    </FishContainer>
  );
}

export default BackgroundFishes;
