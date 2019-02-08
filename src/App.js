import React, { useState } from 'react';
import TodoForm from './Todo-form';
import './App.css';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = index => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <h4>Todos App</h4>
      <TodoForm addTodo={addTodo} />
      <br />
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
};

export default App;
