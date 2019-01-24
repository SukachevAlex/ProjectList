import { cn } from '@bem-react/classname';
import * as React from 'react';

import './List-Photo.css';

const cnList = cn('List');

export interface IListPhotoProps {
  className?: string,
  path?: string,
  hover?: boolean;
}

export const ListPhoto: React.SFC<IListPhotoProps> = ({path, hover}) => (
  <div className={cnList('Photo', {hover})} style={ { backgroundImage: `url(${require(`../ListImages/${path}`)})` } }/>
);
