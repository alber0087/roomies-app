import { useEffect, useState } from 'react'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'
import './Tasks.css'

import { getTasks } from '../../services/task.service'

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Comprar comida',
      completed: true,
    },
    {
      id: 2,
      title: 'Hacer la colada',
      completed: false,
    },
  ])
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isTasksVisible, setIsTasksVisible] = useState(true)

  const listTasks = async () => {
    const res = await getTasks()
    setTasks(res)
    console.log(tasks)
  }

  useEffect(() => {
    listTasks()
  }, [])

  const handleTaskStatusChange = (taskId) => {
    const updatedList = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        }
      }
      return task
    })
    setTasks([...updatedList])
  }

  const handleTaskDeletion = (taskId) => {
    const updatedList = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedList)
  }

  const handleAddTaskClick = () => {
    setIsAddFormVisible(!isAddFormVisible)
    setIsTasksVisible(!isTasksVisible)
  }

  const handleAddTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask])
    setIsAddFormVisible(false)
  }

  return (
    <div className="container">
      {isTasksVisible && (
        <div className="wrapper tasks-wrapper">
          <div className="tasks-list">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                task={task}
                onTaskStatusChange={handleTaskStatusChange}
                onTaskDeletion={handleTaskDeletion}
              />
            ))}
          </div>
        </div>
      )}
      {isAddFormVisible && <AddTaskForm onSubmit={handleAddTaskSubmit} />}
      <PrimaryBtn value="Add Task" callToAction={handleAddTaskClick} />
    </div>
  )
}

export default Tasks
