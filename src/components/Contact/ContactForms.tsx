import { SiGmail, SiWhatsapp } from 'react-icons/si';
import { IoCallSharp } from 'react-icons/io5';
import { Heading } from '../DefaultComponents';
import { ContactFormsContainer, IconsContainer } from './styles';

function ContactForms() {
  return (
    <ContactFormsContainer>
      <Heading level={1} color="text" size="xxlarge">
        ENTRE EM
      </Heading>
      <IconsContainer>
        <SiGmail />
        <br />
        <SiWhatsapp />
        <IoCallSharp />
      </IconsContainer>
    </ContactFormsContainer>
  );
}

export default ContactForms;
