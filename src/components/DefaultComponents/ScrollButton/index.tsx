import { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Button, Container } from './styles';

function ScrollButton() {
  const [scrollTop, setScrollTop] = useState(0);

  const scrollDown = () => {
    window.scroll({
      top: window.scrollY + window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollUp = () => {
    window.scroll({
      top: window.scrollY - window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container>
      {(scrollTop >= 973 || scrollTop >= 878) && (
        <Button type="button" onClick={scrollUp} direction="up">
          <BsChevronUp size={60} fontWeight={100} color="white" />
        </Button>
      )}
      {scrollTop < 4600 && (
        <Button type="button" onClick={scrollDown} direction="down">
          <BsChevronDown size={60} fontWeight={100} color="white" />
        </Button>
      )}
    </Container>
  );
}

export default ScrollButton;
