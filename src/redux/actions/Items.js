export const addItem = name => ({
  type: 'ADD_ITEM',
  payload: name
});

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  payload: id
});

export const completeItem = id => ({
  type: 'COMPLETE_ITEM',
  payload: id
});

export const uncompleteItem = id => ({
  type: 'UNCOMPLETE_ITEM',
  payload: id
});

export const toggleItem = id => ({
  type: 'TOGGLE_ITEM',
  payload: id
});

export const completeAll = () => ({
  type: 'COMPLETE_ALL'
});

export const deleteAll = () => ({
  type: 'DELETE_ALL'
});
