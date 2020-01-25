import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Items from './Items';

const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
`;

function TodoList() {
  return (
    <Container>
      <Input />
      <Items />
    </Container>
  );
}

export default TodoList;
