import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
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
        <br />
        <SiLinkedin />
        <SiGithub />
      </IconsContainer>
    </ContactFormsContainer>
  );
}

export default ContactForms;
