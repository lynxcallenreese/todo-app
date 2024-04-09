// TodoList.js

import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h2>Todo List</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span className={task.completed ? 'completed' : ''}>{task.text}</span>
              <div className="task-actions">
                <button onClick={() => handleCompleteTask(task.id)}>
                  {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
