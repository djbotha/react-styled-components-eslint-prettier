import { ITEM_STATUS } from '../../util/contants';

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      state.push();
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload,
          status: ITEM_STATUS.NEW
        }
      ];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'COMPLETE_ITEM':
      return state.map(item => {
        if (item.id === action.payload) {
          item.status = ITEM_STATUS.DONE;
        }
        return item;
      });
    case 'UNCOMPLETE_ITEM':
      return state.map(item => {
        if (item.id === action.payload) {
          item.status = ITEM_STATUS.NEW;
        }
        return item;
      });
    case 'TOGGLE_ITEM':
      return state.map(item => {
        if (item.id === action.payload) {
          item.status = item.status === ITEM_STATUS.NEW ? ITEM_STATUS.DONE : ITEM_STATUS.NEW;
        }
        return item;
      });
    case 'COMPLETE_ALL':
      return state.map(item => {
        item.status = ITEM_STATUS.DONE;
        return item;
      });
    case 'DELETE_ALL':
      return [];
    default:
      return state;
  }
};

export default items;
