import { useState, useEffect } from 'react';

import positions from '../../data/positions';
import { ProjectBubblesContainer, MainBubble, SmartBubble } from './styles';

function ProjectBubble({ techs, image }) {
  const [positionsArr, setPositionsArr] = useState([]);
  useEffect(() => {
    const createPositionsArr = () => {
      const positionArr = techs.map(
        () => positions[Math.round(Math.random() * 6)]
      );
      setPositionsArr(positionArr);
    };
    createPositionsArr();
    console.log(positionsArr);
  }, []);
  return (
    <ProjectBubblesContainer>
      <MainBubble backgroundImage={image}>
        <div className="one ring" />
        {positionsArr.length > 0 &&
          techs.map((tech, index) => (
            <SmartBubble
              backgroundImage={tech}
              key={tech}
              origin={positionsArr[index]}
            />
          ))}
      </MainBubble>
    </ProjectBubblesContainer>
  );
}

export default ProjectBubble;
