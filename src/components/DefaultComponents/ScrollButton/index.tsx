import { BsChevronDown } from 'react-icons/bs';
import { Button, Container } from './styles';

function ScrollButton() {
  const scroll = () => {
    window.scroll({
      top: window.scrollY + window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <Button type="button" onClick={scroll}>
        <BsChevronDown size={60} fontWeight={100} color="white" />
      </Button>
    </Container>
  );
}

export default ScrollButton;
