import React, { useState } from 'react';
import './styles.css';

const App = () => {
  // State Hooks
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle task input change
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle form submission
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      // Add the new task to the ongoing tasks list
      setTasks([...tasks, newTask]);
      // Clear the input field
      setNewTask('');
      // Hide the task form
      setShowTaskForm(false);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Task Tracker App</h2>
        <button className='add-task' onClick={() => setShowTaskForm(true)}>
          Add Tasks
        </button>
      </div>

      <div className='row row-cards'>
        <div className='col-card'>
          <b>Ongoing Tasks</b>
          <div className='col-bg'>
            {/* Display ongoing tasks */}
            {tasks.map((task, index) => (
              <div key={index}>{task}</div>
            ))}
          </div>
        </div>

        {/* Add Task Form */}
        {showTaskForm && (
          <div className='add-task-form'>
            <input
              type='text'
              placeholder='Enter task...'
              value={newTask}
              onChange={handleTaskChange}
            />
            <button onClick={handleAddTask}>Save Task</button>
          </div>
        )}

        <div className='col-card'>
          <b>Incomplete Tasks</b>
          <div className='col-bg'>{/* Display incomplete tasks */}</div>
        </div>

        <div className='col-card'>
          <b>Completed Tasks</b>
          <div className='col-bg'>{/* Display completed tasks */}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
