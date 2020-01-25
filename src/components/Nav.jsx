import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, createStyles, Tooltip } from '@material-ui/core';
import ToggleBrightness from '@material-ui/icons/Brightness4';
import { useDispatch } from 'react-redux';

import { toggleBrightness } from '../redux/actions';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

function Nav() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleBrightness());
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo List
          </Typography>
          <Tooltip title="Toggle light/dark theme">
            <IconButton onClick={toggle} color="inherit">
              <ToggleBrightness />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
