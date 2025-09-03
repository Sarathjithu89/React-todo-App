import React, { useEffect, useState } from "react";
import "./TodoMain.css";
import { TodosList } from "./TodosList";

export const TodoMain = () => {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("Todos");
    return localTodos ? JSON.parse(localTodos) : [];
  });
  const [task, setTask] = useState("");

  const [itemcount, setItemcout] = useState(0);
  const [conpleted, setCompleted] = useState(0);

  useEffect(() => {
    const completedTasks = todos.filter((task) => task.completed === true);
    setCompleted(completedTasks.length);
  });

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setItemcout(todos.length);
  }, [todos]);

  const handleClickSave = () => {
    if (task.trim() === "") return;
    setTodos((prevTodo) => {
      const newTodo = [{ id: Date.now(), task, completed: false }, ...prevTodo];
      return newTodo;
    });

    setTask("");
  };
  const handleOnchangeInput = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="todo-main">
      <h1 className="todo-title">Todo App</h1>
      <div className="todo-input">
        <input
          className="todo-input-text"
          type="text"
          value={task}
          placeholder="Enter new task"
          onChange={handleOnchangeInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClickSave();
            }
          }}
        />
        <button className="todo-input-button" onClick={handleClickSave}>
          Add
        </button>
      </div>
      <h2>
        Current Tasks : {itemcount} , Completed Tasks : {conpleted}
      </h2>

      {todos.length > 0 ? (
        <TodosList todos={todos} setTodos={setTodos} />
      ) : (
        <div className="Add-new">
          <p>Add New Tasks</p>
        </div>
      )}
    </div>
  );
};
