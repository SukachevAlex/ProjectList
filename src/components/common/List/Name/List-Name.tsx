import { cn } from '@bem-react/classname';
import * as React from 'react';

import './List-Name.css';

const cnList = cn('List');

export interface IListNameProps {
  className?: string;
  name?: string;
}

export const ListName: React.SFC<IListNameProps> = ({name}) => (
  <div className={cnList('Name')}>{name}</div>
);
