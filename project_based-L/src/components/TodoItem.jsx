import React from "react";

const TodoItem = ({
  todo,
  dispatch
}) => {

  return (
    <div className="todoItem">

      <h3
        className={
          todo.completed
            ? "completed"
            : ""
        }
      >
        {todo.text}
      </h3>

      <div className="todoBtns">

        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_TODO",
              payload: todo.id
            })
          }
        >
          Toggle
        </button>

        <button
          className="deleteBtn"
          onClick={() =>
            dispatch({
              type: "DELETE_TODO",
              payload: todo.id
            })
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TodoItem;