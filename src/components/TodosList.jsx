import React from "react";
import "./TodoList.css";
export const TodosList = ({ todos, setTodos }) => {
  const handleClickDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const handleClickComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="main-list">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <p
              style={
                item.completed
                  ? { textDecoration: "line-through", color: "green" }
                  : { textDecoration: "none" }
              }
            >
              {item.task}
            </p>
            <div className="list-buttons">
              <button
                className="item-delete-button"
                onClick={() => handleClickDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="item-complete-button"
                onClick={() => handleClickComplete(item.id)}
              >
                Completed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
