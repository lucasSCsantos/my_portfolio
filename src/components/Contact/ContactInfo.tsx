import { Heading, Text } from '../DefaultComponents';
import { ContactInfoContainer } from './styles';

function ContactInfo() {
  return (
    <ContactInfoContainer>
      <Heading level={1} color="textLight" size="xxlarge">
        CONTATO!
      </Heading>
      <Text size="normal" color="textLight">
        luc.cristovam10@gmail.com
      </Text>
      <Text size="normal" color="textLight">
        (71) 98184-9630
      </Text>
    </ContactInfoContainer>
  );
}

export default ContactInfo;
