import React, { useState } from "react";
import style from "../../styles/index.css";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleNewTask = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setToDos([...toDos, inputValue]);
      setInputValue("");
    }
  };
  const HandleRemoveTask = (index) => {
    const newToDos = toDos.filter((_, i) => i !== index);
    setToDos(newToDos);
  };
  return (
    <div className="container">
      <h1>To-Dos!</h1>
      <h2>Add or remove tasks</h2>
      <ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleNewTask}
          placeholder="Type your task here!"
        />
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="delete" onClick={() => HandleRemoveTask(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
