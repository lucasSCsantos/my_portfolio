import { IoCallSharp } from 'react-icons/io5';
import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Heading, Text } from '../DefaultComponents';
import { IconsContainer, MobileContactInfo, MobileContainer } from './styles';

function MobileContact() {
  const breakpoint = useMediaQuery(428);
  const iconSize = breakpoint ? 20 : 45;

  return (
    <MobileContainer>
      <Heading
        level={1}
        size="xxlarge"
        style={{ textAlign: 'left' }}
        color="textLight"
      >
        ENTRE <br /> EM <br /> CONTATO
      </Heading>
      <MobileContactInfo>
        <IconsContainer>
          <SiGmail size={iconSize} />
          <br />
          <SiWhatsapp size={iconSize} />
          <IoCallSharp size={iconSize} />
          <br />
          <SiLinkedin size={iconSize} />
          <SiGithub size={iconSize} />
        </IconsContainer>
        <div>
          <Text size="large" color="textLight">
            luc.cristovam10@gmail.com
          </Text>
          <Text size="large" color="textLight">
            (71) 98184-9630
          </Text>
        </div>
      </MobileContactInfo>
    </MobileContainer>
  );
}

export default MobileContact;
