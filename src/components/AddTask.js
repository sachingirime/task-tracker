import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {

  const [text, settext] = useState('')
  const [day, setday] = useState('')
  const [reminder, setreminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()
        if (!text){ alert('Please enter the task')
        return
  }
        onAdd({text,day,reminder})

        settext('')
        setday('')
        setreminder('')




  }

    return (
        <form className = 'add-form' onSubmit={onSubmit} >

            <div className = 'form-control '>
                <label >Task</label>
                <input type = 'text' placeholder = 'Add Task' onChange = {(e)=>settext(e.target.value)} value = {text} />
            </div>

            <div className = 'form-control '>
                <label>Day & Time</label>
                <input type = 'text' placeholder = 'Add Day and Time' onChange = {(e)=>setday(e.target.value)} value = {day} />
            </div>

            <div className = 'form-control form-control-check  '>
                <label>Set Reminder</label>
                <input type = 'checkbox' checked = {reminder} onChange = {(e)=>setreminder(e.currentTarget.checked)} value = {reminder} />
            </div>

            <input type = 'submit' value = 'Save Task' className = 'btn btn-block' />



        </form>
    )
}

export default AddTask
