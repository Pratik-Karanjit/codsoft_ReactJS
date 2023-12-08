import React, { useState } from 'react';
import './styles.css';

const App = () => {
  // State Hooks
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');              //A state variable to store the input value for adding a new task.

//Updates the newTask state when the input in the task form changes.
  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle form submission
  const handleAddTask = () => {
    if (newTask.trim() !== '') {             //trim() removes any whitespace and !== '' checks if the trimmed value of newTask is not an empty string
      setTasks([...tasks, newTask]);        //Spread operator to call tasks array defined in useState and appending newTask state to it to add a new task to the end of the array
      setNewTask('');                      // Clear the input field        
      setShowTaskForm(false);             // Hide the task form 
    }
  };

  const handleCancelTask = () => {
    setShowTaskForm(false); // Hide the task form
  }

  // const handleAddTaskClick = () => {
  //   setShowTaskForm(true);
  //   navigate('/new-task'); // Navigate to the "/new-task" route
  // };


  return (
    <div className='container'>
      <div className='header'>
        <h2>Task Tracker App</h2>
        <button className='add-task' onClick={() => setShowTaskForm(true)}>
          Add Tasks
        </button>
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

            {/* add and cancel tasks buttons */}
            <button onClick={handleAddTask}>Save Task</button>           
            <button onClick={handleCancelTask}>Cancel Task</button>
          </div>
        )}


      <div className='row row-cards'>
        <div className='col-card'>
          <b>Ongoing Tasks</b>
          <div className='col-bg'>
            {/* Display ongoing tasks */}
            {tasks.map((task, index) => (
              <div className = "add-task-here" key={index}>{task}</div>
            ))}
          </div>
        </div>

      
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
