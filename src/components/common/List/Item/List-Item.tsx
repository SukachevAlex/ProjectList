import { cn } from '@bem-react/classname';
import * as React from 'react';

import { IListData } from '../ListData.d';
import './List-Item.css';

const cnList = cn('List');

export interface IListItemProps extends IListData{
  className?: string
}

export const ListItem: React.SFC<IListItemProps> = ({name, path, path_hover, link, page}) => (
  <div className={cnList('Item')}>
    {path && <div className={cnList('Photo')} style={ { backgroundImage: `url(${require(`../ListImages/${path}`)})` } }/>}
    {path_hover && <div className={cnList('Photo_hover')} style={ { backgroundImage: `url(${require(`../ListImages/${path_hover}`)})` } }/>}
    {name && <p className={cnList('Name')}>{name}</p>}
    {link && <a className={cnList('Link')} href={link}>gihtub</a>}
    {page && <a className={cnList('Link')} href={page}>gh-pages</a>}
  </div>
);
