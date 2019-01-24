import { cn } from '@bem-react/classname';
import * as React from 'react';

import { ListLink } from '../Link/List-Link';
import { IListData } from '../ListData.d';
import { ListName } from '../Name/List-Name';
import { ListPhoto } from '../Photo/index';
import './List-Item.css';

const cnList = cn('List');

export interface IListItemProps extends IListData{
  className?: string
}

export const ListItem: React.SFC<IListItemProps> = ({name, path, path_hover, link, page}) => (
  <div className={cnList('Item')}>
    {path && <ListPhoto path={path}/>}
    {path && <ListPhoto path={path_hover} hover={true}/>}
    {name && <ListName name={name} />}
    {link && <ListLink link={link} text='github'/>}
    {page && <ListLink link={page} text='gh-pages'/>}
  </div>
);
