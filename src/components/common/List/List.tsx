import { cn } from '@bem-react/classname';
import * as React from 'react';

import { ListItem } from './Item/List-Item';
import './List.css';
// import { IListData } from './ListData.d';
import * as data from './ListData.json';

const cnList = cn('List');

export interface IListProps {
  className?: string;
}

export const List: React.SFC<IListProps> = (props) => {

  const list = data.map((el: any) => {
    return <ListItem
      name={el.name}
      path={el.path}
      path_hover={el.path_hover}
      link={el.link}
      page={el.page}
      key={el.name} />;
  });

  return (
    <div className={cnList()}>
      {list}
    </div>
  )
};
