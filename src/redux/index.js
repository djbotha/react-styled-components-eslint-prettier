import { THEME_TYPE, ITEM_STATUS } from '../util/contants';

export const initialState = {
  theme: THEME_TYPE.DARK,
  items: [
    {
      id: 1,
      title: 'Learn react',
      status: ITEM_STATUS.DONE
    },
    {
      id: 2,
      title: 'Learn redux',
      status: ITEM_STATUS.NEW
    }
  ]
};
