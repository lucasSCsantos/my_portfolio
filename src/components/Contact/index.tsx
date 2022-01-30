import { Area } from '../DefaultComponents';
import BackgroundBubbles from '../DefaultComponents/BackgroundBubbles';
import ContactForms from './ContactForms';
import ContactInfo from './ContactInfo';
import { Container } from './styles';

function Contact() {
  return (
    <Container>
      <Area backgroundColor="transparent" width={45} height="100%">
        <ContactForms />
      </Area>
      <Area backgroundColor="quaternary" width={55} height="100%">
        <ContactInfo />
      </Area>
      <BackgroundBubbles size={90} />
    </Container>
  );
}

export default Contact;
