import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import TodoList from './TodoList';
import Nav from './Nav';

function App() {
  const type = useSelector(store => store.theme);
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type
        },
        typography: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(',')
        }
      }),
    [type]
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100%' }}>
        <Nav />
        <TodoList />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
