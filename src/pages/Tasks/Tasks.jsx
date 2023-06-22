import { useEffect, useState } from 'react'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'
import PrevBtn from './PrevBtn/PrevBtn'
import './Tasks.css'

import { deleteTaskService, getTasks, updateTaskStatusService } from '../../services/task.service'
import Spinner from '../../components/Spinner/Spinner'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isTasksVisible, setIsTasksVisible] = useState(true)

  const listTasks = async () => {
    const res = await getTasks()
    setTasks(res)
  }

  const handleTaskDeletion = (taskId) => {
    deleteTaskService(taskId)
    const updatedList = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedList)
  }

  useEffect(() => {
    listTasks()
  }, [tasks])

  const handleTaskStatusChange = (taskId) => {
    updateTaskStatusService(taskId)
    const updatedList = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: 'Completed',
        }
      }
      return task
    })
    setTasks([...updatedList])
  }

  const handleAddTaskClick = () => {
    setIsAddFormVisible(!isAddFormVisible)
    setIsTasksVisible(!isTasksVisible)
  }

  const handleAddTaskSubmit = (addTask) => {
    setTasks([...tasks, addTask])
    setIsAddFormVisible(false)
    setIsTasksVisible(!isTasksVisible)
  }

  const handleGoBack = () => {
    setIsAddFormVisible(false)
    setIsTasksVisible(!isTasksVisible)
  }

  return (
    <div className="container">
      {isTasksVisible && (
        <div className="wrapper tasks-wrapper">
          <div className="tasks-list">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.name}
                  task={task}
                  onTaskStatusChange={handleTaskStatusChange}
                  onTaskDeletion={handleTaskDeletion}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      )}
      {isAddFormVisible && (
        <>
          <PrevBtn onClick={handleGoBack} />
          <AddTaskForm onSubmit={handleAddTaskSubmit} />
        </>
      )}
      {!isAddFormVisible && (
        <PrimaryBtn value="Add Task" callToAction={handleAddTaskClick} />
      )}
    </div>
  )
}

export default Tasks
