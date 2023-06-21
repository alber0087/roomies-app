/* eslint-disable react/prop-types */

import { useState } from 'react'
import './AddTaskForm.css'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import AddBtn from '../../components/AddBtn/AddBtn'

const AddTaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: Date.now(), // Genera un ID único para la tarea
      name: taskName,
      description: description,
      date: date,
      completed: false,
    }
    onSubmit(newTask)
    setTaskName('')
    setDescription('')
    setDate('')
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={handleTaskNameChange} />
        </div>
        <div className="form-group">
          <label>
            Description:
          </label>
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
        </div>
        <div className="form-group">
          <label>
          Date:
        </label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <AddBtn value='+'/>
      </form>
    </div>
  )
}

export default AddTaskForm
