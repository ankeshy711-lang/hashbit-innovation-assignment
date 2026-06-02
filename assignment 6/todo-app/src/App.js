import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if (task.trim() === "") return;

    const updatedTasks = [...tasks, task].sort();

    setTasks(updatedTasks);

    setTask("");
  };

  const deleteTask = (index) => {

    const updatedTasks =
      tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>React To Do App</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>

        {tasks.map((item, index) => (

          <li key={index}>

            {item}

            <button
              onClick={() => deleteTask(index)}
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