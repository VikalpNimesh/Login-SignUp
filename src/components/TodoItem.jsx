import React, { useState } from 'react';
import { useData } from '../contexts/context';

const TodoItem = ({ todoItem }) => {
  const { setTodos } = useData();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todoItem.todo);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
  
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, todo: updatedTodo } : todo))
    );
    setIsEdit(false);
  };

  return (
    <div className="result" key={todoItem.id}>
      {isEdit ? (
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => setUpdatedTodo(e.target.value)}
          
        />
      ) : (
        <h2>{todoItem.todo}</h2>
      )}
      <span>
        {isEdit ? (
          <button
            onClick={() => {
              updateTodo(todoItem.id, updatedTodo);
            }}
            className="submit"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            className="edit"
          >
            Edit
          </button>
        )}
      </span>
      <span>
        <button onClick={() => deleteTodo(todoItem.id)} className="delete">
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
