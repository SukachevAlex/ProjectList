import { cn } from '@bem-react/classname';
import * as React from 'react';

import './List-Link.css';

const cnList = cn('List');

export interface IListLinkProps {
  className?: string;
  link?: string;
  text?: string;
}

export const ListLink: React.SFC<IListLinkProps> = ({link, text}) => (
  <a className={cnList('Link')} href={link}>{text}</a>
);
