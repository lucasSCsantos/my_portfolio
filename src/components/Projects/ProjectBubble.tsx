import { useState, useEffect } from 'react';
import generateRandomArr from '../../../helpers/generateRandomArr';
import positions from '../../data/positions';
import { ProjectBubblesContainer, MainBubble, SmartBubble } from './styles';

function ProjectBubble({ techs, image, id, link }) {
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
      <a href={link} target="_blank" rel="noreferrer">
        <MainBubble backgroundImage={image} id={id}>
          <div className="popover">
            ABRIR
            <div className="triangle" />
          </div>
        </MainBubble>
      </a>
      {positionsArr.length > 0 &&
        techs.map((tech, index) => (
          <SmartBubble
            backgroundImage={tech}
            key={tech}
            origin={positionsArr[index]}
            float={Math.random() * -8 - 8}
            id={id}
          />
        ))}
    </ProjectBubblesContainer>
  );
}

export default ProjectBubble;
