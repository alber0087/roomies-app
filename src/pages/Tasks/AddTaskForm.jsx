/* eslint-disable react/prop-types */

import { useState } from 'react'
import './AddTaskForm.css'
import AddBtn from '../../components/AddBtn/AddBtn'
import { addTaskService } from '../../services/task.service'

const AddTaskForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')

  const handleTaskNameChange = (event) => {
    setName(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(addTask())
    setName(name)
    setDescription(description)
    setDate(date)
  }

  const addTask = async () => {
    await addTaskService(name, description, date)
  }

  return (
    <div className="wrapper addTask-wrapper">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
          <label>Task Name:</label>
          <input type="text" value={name} onChange={handleTaskNameChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            type="text"
            rows={6}
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="right">
          <AddBtn value="+" />
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm
