import { Heading } from '../DefaultComponents';
import { ContactInfoContainer } from './styles';

function ContactInfo() {
  return (
    <ContactInfoContainer>
      <Heading level={1} color="textLight" size="xxlarge">
        CONTATO!
      </Heading>
    </ContactInfoContainer>
  );
}

export default ContactInfo;
