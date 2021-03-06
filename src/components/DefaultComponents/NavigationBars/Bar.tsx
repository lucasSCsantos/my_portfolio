import { useState, useEffect } from 'react';

import { BarContainer } from './styles';

function Bar({ width, name, limit }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [className, setClassName] = useState('');

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    console.log(
      (scrollTop <= width || scrollTop <= limit) && scrollTop >= width - 970
    );
    console.log(scrollTop, width, limit, width - 970);
    return (scrollTop <= width || scrollTop <= limit) &&
      scrollTop >= width - 970
      ? setClassName('actual')
      : setClassName('');
  }, [scrollTop]);

  const scroll = scrollWidth => {
    window.scroll({
      top: scrollWidth - 485,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BarContainer onClick={() => scroll(width)} className={className}>
      <div className="popover">
        {name}
        <div className="triangle" />
      </div>
    </BarContainer>
  );
}

export default Bar;
