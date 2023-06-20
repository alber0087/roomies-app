import { useEffect, useState } from 'react'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import TaskCard from './TaskCard'
import './Tasks.css'

import { getTasks } from '../../services/task.service'

function Tasks() {
  const [tasks, setTasks] = useState([{title: 'Comprar comida'}, {title: 'Hacer la colada'}])

  const listTasks = async () => {
    const res = await getTasks()
    setTasks(res)
    console.log(tasks)
  }

  useEffect(() => {
    listTasks()
  }, [])

  return (
    <div className="container">
      <div className="wrapper tasks-wrapper">
        <div className='tasks-list'>
        {
          tasks.map((task, idx) => 
            <TaskCard key={idx} title={task.title} />
          )
        }
        </div>
      </div>
      <PrimaryBtn value='Add Task'/>
    </div>
  )
}

export default Tasks