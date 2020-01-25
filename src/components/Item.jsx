import React from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { ITEM_STATUS } from '../util/contants';
import { toggleItem, removeItem } from '../redux/actions';

const Text = styled(ListItemText)`
  text-decoration: ${p => (p.done ? 'line-through' : 'none')};
`;

function Item({ item }) {
  const dispatch = useDispatch();
  const { id, title, status } = item;

  console.log(`After: ${item}`);

  const toggleState = () => {
    console.log(`Before: ${item}`);
    dispatch(toggleItem(id));
  };

  const onDeleteClicked = () => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      dispatch(removeItem(id));
    }
  };

  return (
    <ListItem button onClick={toggleState}>
      <Text primary={title} color="inherit" done={status === ITEM_STATUS.DONE} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="remove" onClick={onDeleteClicked}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Item;
