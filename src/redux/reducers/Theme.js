import { THEME_TYPE } from '../../util/contants';

const theme = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_BRIGHTNESS':
      state = state === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK;
      return state;
    case 'SET_BRIGHTNESS':
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default theme;
