import React from 'react';

const Todo = ({ text, deleteTodo, index }) => (
  <p
    onClick={() => {
      deleteTodo(index);
    }}
  >
    {text}
  </p>
);

export default Todo;
