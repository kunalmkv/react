import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState(["Take shower", "Eat breakfast", "Go to work"]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
    setTasks(newTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
    setTasks(newTasks);
  }

  return (
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
              type="text"
              placeholder="Enter a task"
              value={newTask}
              onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <div>
                  <button
                      className="delete-button"
                      onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                  <button
                      className="move-up-button"
                      onClick={() => moveTaskUp(index)}>
                    ☝️
                  </button>
                  <button
                      className="move-down-button"
                      onClick={() => moveTaskDown(index)}>
                    👇
                  </button>
                </div>
              </li>
          ))}
        </ol>
      </div>
  );
}

export default ToDoList;
