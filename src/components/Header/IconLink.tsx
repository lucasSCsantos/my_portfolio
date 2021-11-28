import Link from 'next/link';
import { ReactNode } from 'react';
import { IconLinkContainer } from './styles';

interface IconLinkProps {
  path: string;
  children: ReactNode;
}

function IconLink({ path = '/', children }: IconLinkProps) {
  return (
    <IconLinkContainer>
      <Link href={path}>{children}</Link>
    </IconLinkContainer>
  );
}

export default IconLink;