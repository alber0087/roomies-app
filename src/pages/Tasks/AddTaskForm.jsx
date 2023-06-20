// AddTaskForm.js

import { useState } from 'react';

const AddTaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(), // Genera un ID único para la tarea
      name: taskName,
      description: description,
      date: date,
      completed: false,
    };
    onSubmit(newTask);
    setTaskName('');
    setDescription('');
    setDate('');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
