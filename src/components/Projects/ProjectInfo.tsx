import { Heading, Text } from '../DefaultComponents';
import { ProjectInfoContainer } from './styles';

function ProjectInfo({ description, name, id }) {
  return (
    <ProjectInfoContainer id={id}>
      <Heading level={2} color="text" size="normal">
        {name}
      </Heading>
      <Text size="xsmall" color="text">
        {description}
      </Text>
      {id < 6 && <div className="vertical-lign" />}
    </ProjectInfoContainer>
  );
}

export default ProjectInfo;
