import { useState } from "react";
import "./todo.css";
import { useData } from "../../contexts/context";
import TodoItem from "../../components/TodoItem";
import InnerPage from "../InnerPage/InnerPage";
import { Link } from "react-router-dom";

const Todo = () => {
  const { todos, setTodos } = useData();
  const [todo, setTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todo.trim()
      }
    ]);
    setTodo("");
  };

  return (
    <>
      <main>
        <form className="container" onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}>
          <h1>Task 1</h1>
          <span><Link to="/InnerPage"><button>InnerPage</button></Link></span>
          <div className="input-block">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter Here Something ... "
            />
            <button type="submit" className="submit">
              {isEdit !== null ? "Update" : "Add"}
            </button>
          </div>
        </form>

        {todos &&
          todos.map((todoItem) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} setTodo={setTodo} />
          ))}
      </main>
    </>
  );
};



export default Todo;
