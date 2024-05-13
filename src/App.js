/* eslint-disable no-undef */
import React, { useState , useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [])


  
  function addTodo (title) {
    setTodos(prev => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ])
    setTitle('')
  }

  function removeTodo(id) {
    setTodos([...todos].filter(t => t.id !== id))
  }

  return (
    <>
      <div>
        <div className='container-input'>
          <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
          <button onClick={() => addTodo(title)}>add</button>
        </div>
      
      </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input className='check' type="checkbox" defaultChecked={todo.сompleted}></input>
              {todo.title}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      {/* filter */}
      <div className="filters btn-group stack-exception">{filter.filterList}</div>
    </>
  );
}

export default App;
