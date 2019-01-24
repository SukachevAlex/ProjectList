import { compose } from '@bem-react/core';
import { ListPhoto as Base } from './List-Photo';

import { ListPhotoHover } from './_hover/List-Photo_hover';

export const ListPhoto = compose(
  ListPhotoHover
)(Base);
