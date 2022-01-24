import { Heading, Text } from '../DefaultComponents';
import { ProjectInfoContainer } from './styles';

function ProjectInfo({ description, name }) {
  return (
    <ProjectInfoContainer>
      <Heading level={2} color="text" size="normal">
        {name}
      </Heading>
      <Text size="xsmall" color="text">
        {description}
      </Text>
    </ProjectInfoContainer>
  );
}

export default ProjectInfo;
