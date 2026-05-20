import React, {
  useState
} from "react";

const TodoForm = ({ dispatch }) => {

  const [text, setText] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(text === ""){
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: text
    });

    setText("");
  };

  return (
    <form
      className="todoForm"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
};

export default TodoForm;