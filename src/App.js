
import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footcomp from './components/Footcomp';
import About from './components/About';




function App() {
  const [showAdd, setshowAdd] = useState(false)

  const [tasks, setTasks] = useState([
    {id:1,
        text: "Doctors Appointment", 
        day: "Feb 6th at 1:30 pm", 
        reminder: true,},

      {id:2,
        text: "Meeting at office", 
        day: "Feb 7th at 10:30 am",
         reminder: false,},

      {id:3,
        text: "Grocery Shopping", 
        day: "Feb 7th at 3:30 pm",
         reminder: true}
 
  ])

    //Delete task
    const deleteTask = (id) => {

      setTasks(tasks.filter(task => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id)=> {
      setTasks(
        tasks.map(task=>
        task.id === id ? {...task, reminder: !task.reminder } : task)
        )

     
    }

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task}
      
      setTasks([...tasks,newTask])
      // console.log(tasks)
      
    }


  return (
    <Router>
    <div className="container">
     <Header onAdd = {() => setshowAdd(!showAdd)} showValue = {showAdd}/>
     
      <Route path = '/' exact render = {(props)=>(
        <>
          {showAdd && <AddTask onAdd = {addTask}/>}
          {tasks.length > 0 ?(<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>): ('NO TASKS TO SHOW')}
      
        </>

  )}/>
      <Route path = '/about' component = {About}/>
      <Footcomp/>
     
    </div>
    </Router>
  );
}

export default App;
