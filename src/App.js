import React from 'react'
import './styles.css'
import { useState } from 'react';

const App = () => {

  let [task, setTask] = useState()
  let [incompleteTask, setIncompleteTask] = useState()
  let [completeTask, setCompleteTask] = useState()


  return (
    <div className='container'>
        <div className='header'>
        <h2>Task Tracker App</h2>
        <button className='add-task'>Add Tasks</button>
      </div>
      <div className='row row-cards'>
      <div class="col-card">
        <b>Ongoing Tasks</b>
        <div class="col-bg">
        
        </div>
     </div>
      <div class="col-card">
      <b>Incomplete Tasks</b>
        <div class="col-bg">
        
        </div>
     </div>
      <div class="col-card">
      <b>Completed Tasks</b>
        <div class="col-bg">
        {/* &nbsp;&nbsp; */}
        </div>
     </div>
      </div>
    </div>
  );
}

export default App