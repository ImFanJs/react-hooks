import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const submitTodo = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={submitTodo}>
      <input
        type="text"
        placeholder="Add new todo"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default TodoForm;
