
import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  // Clear All Tasks
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>To-Do List App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
        onClick={addTask}
        style={{ marginLeft: "10px" }}
      >
        Add Task
      </button>

      <button
        onClick={clearAll}
        style={{ marginLeft: "10px" }}
      >
        Clear All
      </button>

      <hr />

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>

            {item}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;

