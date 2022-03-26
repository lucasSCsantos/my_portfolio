import useMediaQuery from '../../hooks/useMediaQuery';
import { Area } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import BackgroundPlants from './BackgroundPlants';
import ContactForms from './ContactForms';
import ContactInfo from './ContactInfo';
import MobileContact from './MobileContact';
import { Container } from './styles';

function Contact() {
  const breakpoint = useMediaQuery(834);

  return (
    <Container id="contato">
      {breakpoint ? (
        <>
          <Area backgroundColor="transparent" width={100} height="100%">
            <BackgroundPlants />
            <MobileContact />
          </Area>
          <BackgroundBubbles size={90} />
        </>
      ) : (
        <>
          <Area backgroundColor="transparent" width={45} height="100%">
            <ContactForms />
          </Area>
          <Area backgroundColor="quaternary" width={55} height="100%">
            <BackgroundPlants />
            <ContactInfo />
          </Area>
          <BackgroundBubbles size={90} />
        </>
      )}
    </Container>
  );
}

export default Contact;
