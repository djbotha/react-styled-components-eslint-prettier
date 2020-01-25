import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconButton, List } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteIcon from '@material-ui/icons/Delete';

import Item from './Item';
import { completeAll, deleteAll } from '../redux/actions';

function Items() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.items);
  console.log(items);

  const allClicked = () => {
    dispatch(completeAll());
  };

  const onDeleteAll = () => {
    if (window.confirm(`Are you sure you want to delete ${items.length > 1 ? `all ${items.length} entries` : 'this entry'}?`)) {
      dispatch(deleteAll());
    }
  };

  return (
    <>
      <IconButton edge="end" aria-label="doneAll" onClick={allClicked}>
        <DoneAllIcon />
      </IconButton>
      <IconButton edge="end" aria-label="deleteAll" onClick={onDeleteAll}>
        <DeleteIcon />
      </IconButton>
      <List>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </List>
    </>
  );
}

export default Items;
