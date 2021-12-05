import { useState, useEffect } from 'react';
import generateRandomArr from '../../../helpers/generateRandomArr';
import positions from '../../data/positions';
import { ProjectBubblesContainer, MainBubble, SmartBubble } from './styles';

function ProjectBubble({ techs, image, id }) {
  const [positionsArr, setPositionsArr] = useState([]);
  useEffect(() => {
    const createPositionsArr = () => {
      const randomArr = generateRandomArr(Object.values(positions).length);
      const positionArr = techs.map(
        (_tech, index) => positions[randomArr[index]]
      );

      setPositionsArr(positionArr);
    };
    createPositionsArr();
  }, []);
  return (
    <ProjectBubblesContainer>
      <MainBubble backgroundImage={image} id={id}>
        {positionsArr.length > 0 &&
          techs.map((tech, index) => (
            <SmartBubble
              backgroundImage={tech}
              key={tech}
              origin={positionsArr[index]}
              float={Math.random() * -8 - 8}
            />
          ))}
      </MainBubble>
    </ProjectBubblesContainer>
  );
}

export default ProjectBubble;
