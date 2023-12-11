import React, { useState } from 'react';
import './styles.css';

const App = () => {
  // State Hooks
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  // Updates the newTask state when the input in the task form changes.
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle form submission
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setIncompleteTasks([...incompleteTasks, newTask]);
      setNewTask('');
      setShowTaskForm(false);
    }
  };

  const handleCancelTask = () => {
    setShowTaskForm(false);
  }

// Function to delete a task (either incomplete or completed)
const handleDeleteTask = (index, isComplete) => {
  const updatedTasks = isComplete ? [...completedTasks] : [...incompleteTasks];        // Create a copy of the tasks array based on whether the task is complete or incomplete
  updatedTasks.splice(index, 1);                                                      //Remove task at specified index
  isComplete ? setCompletedTasks(updatedTasks) : setIncompleteTasks(updatedTasks);      // Update the state based on whether the task is complete or incomplete
};


// Function to mark a task as complete
const handleMarkAsComplete = (index) => {
  // Get the task that is being marked as complete
  const taskToComplete = incompleteTasks[index];

  // Add the completed task to the completedTasks array
  setCompletedTasks([...completedTasks, taskToComplete]);

  // Delete the task from the incompleteTasks array
  handleDeleteTask(index, false);
};


  const handleEditTask = (index) => {
    setEditTaskIndex(index);
    setEditedTask(incompleteTasks[index]);
  };

  const handleUpdateTask = () => {
    const updatedTasks = [...incompleteTasks];
    updatedTasks[editTaskIndex] = editedTask;
    setIncompleteTasks(updatedTasks);
    setEditTaskIndex(null);
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Task Tracker App</h2>
        <button className='add-task' onClick={() => setShowTaskForm(true)}>
          Add Tasks
        </button>
      </div>

      {showTaskForm && (
        <div className='add-task-form'>
          <input
            type='text'
            placeholder='Enter task...'
            value={newTask}
            onChange={handleTaskChange}
          />
          <button onClick={handleAddTask}>Save Task</button>
          <button onClick={handleCancelTask}>Cancel Task</button>
        </div>
      )}

      <div className='row row-cards'>
      <div className='col-card'>
          <b>Tasks</b>
          <div className='col-bg'>
            {incompleteTasks.map((task, index) => (
              <div className='add-task-here' key={index}>
                {editTaskIndex === index ? (
                  <div>
                    <input
                      type='text'
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button className='update-button' onClick={handleUpdateTask}>Update</button>
                  </div>
                ) : (
                  <div>
                    <p>{task}</p>
                    <div>
                      <button
                        className='mark-complete-button'
                        onClick={() => handleMarkAsComplete(index)}
                      >
                        Mark as completed
                      </button>
                      <button className='update-button' onClick={() => handleEditTask(index)}>Edit</button>
                      <button
                        className='delete-button'
                        onClick={() => handleDeleteTask(index, false)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='col-card'>
          <b>Completed Tasks</b>
          <div className='col-bg'>
            {completedTasks.map((task, index) => (
              <div className='add-task-here' key={index}>
                <p>{task}</p>
                <button
                  className='delete-button'
                  onClick={() => handleDeleteTask(index, true)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
