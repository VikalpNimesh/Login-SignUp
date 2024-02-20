import React from 'react';
import { useData } from '../../contexts/context';
import { Link } from 'react-router-dom';
import './InnerPage.css'; 

const InnerPage = () => {
  const { todos } = useData();

  return (
    <div className="inner-page-container">
     <span><Link to="/"><button>HomePage</button></Link></span>     
      <div className="todos-container">
        <h6>Todos
        <span><p>{todos.length == 0 ? "" : (todos.length)}</p></span></h6>
       
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InnerPage;