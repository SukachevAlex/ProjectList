import { withBemMod } from '@bem-react/core';
import { IListPhotoProps } from '../List-Photo';

import './List-Photo_hover.css';

export const ListPhotoHover = withBemMod<IListPhotoProps>('List-Photo', {hover: true});
