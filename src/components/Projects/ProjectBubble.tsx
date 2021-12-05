import { useState, useEffect } from 'react';
import generateRandomArr from '../../../helpers/generateRandomArr';

import positions from '../../data/positions';
import { ProjectBubblesContainer, MainBubble, SmartBubble } from './styles';

function ProjectBubble({ techs, image }) {
  const [positionsArr, setPositionsArr] = useState([]);
  useEffect(() => {
    const createPositionsArr = () => {
      const randomArr = generateRandomArr(techs.length);
      const positionArr = techs.map(
        (_tech, index) => positions[randomArr[index]]
      );

      setPositionsArr(positionArr);
    };
    createPositionsArr();
  }, []);
  return (
    <ProjectBubblesContainer>
      <MainBubble backgroundImage={image}>
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
