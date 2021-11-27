import Link from 'next/link';
import { Text } from '../DefaultComponents';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  text: string;
  path?: string;
}

const defaultProps = {
  path: '/'
};

function NavLink({ text, path = '/' }: NavLinkProps) {
  return (
    <NavLinkContainer>
      <Link href={path}>
        <Text>{text}</Text>
      </Link>
    </NavLinkContainer>
  );
}

NavLink.defaultProps = defaultProps;

export default NavLink;
