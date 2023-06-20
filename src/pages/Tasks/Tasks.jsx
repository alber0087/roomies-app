import { useEffect, useState } from 'react'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import TaskCard from './TaskCard'
import './Tasks.css'

import { getTasks } from '../../services/task.service'

function Tasks() {
  const [tasks, setTasks] = useState([])



  const listTasks = async () => {
    const res = await getTasks()
    setTasks(res)
    
  }

  useEffect(() => {
    listTasks()
  }, [])
console.log(tasks)
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

  return (
    <div className="container">
      <div className="wrapper tasks-wrapper">
        <div className="tasks-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.name}
              task={task}
              onTaskStatusChange={handleTaskStatusChange}
              onTaskDeletion={handleTaskDeletion}
            />
          ))}
        </div>
      </div>
      <PrimaryBtn value="Add Task" />
    </div>
  )
}

export default Tasks