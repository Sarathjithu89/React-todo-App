import React, { useState } from "react";
import "./TodoList.css";

export const TodosList = ({ todos, setTodos }) => {
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

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

  const handleEdit = (id, currentTask) => {
    setEditId(id);
    setEditValue(currentTask);
  };

  const handleSaveEdit = (id) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: editValue } : item))
    );
    setEditId(null);
    setEditValue("");
  };

  return (
    <div className="main-list">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  className="item-edit-input"
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  className="save-button"
                  onClick={() => handleSaveEdit(item.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
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
                  <button
                    className="item-edit-button"
                    onClick={() => handleEdit(item.id, item.task)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
