import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../redux/actions';

const Form = styled.form`
  text-align: center;
  margin-bottom: 2rem;
`;

function Input() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() !== '') {
      dispatch(addItem(name.trim()));
    }

    setName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={name} onChange={e => setName(e.target.value)} />
    </Form>
  );
}

export default Input;
