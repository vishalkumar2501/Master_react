import React, {
  useReducer
} from "react";

import TodoForm
from "../components/TodoForm";

import TodoList
from "../components/TodoList";

import {
  todoReducer
} from "../reducers/todoReducer";

const Todos = () => {

  const [todos, dispatch] =
    useReducer(todoReducer, []);

  return (
    <div className="container">

      <h1>Todo App</h1>

      <TodoForm dispatch={dispatch} />

      <TodoList
        todos={todos}
        dispatch={dispatch}
      />

    </div>
  );
};

export default Todos;