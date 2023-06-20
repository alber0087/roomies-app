import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'
import TaskCard from './TaskCard'
import './Tasks.css'

function Tasks() {
  return (
    <div className="container">
      <div className="wrapper tasks-wrapper">
        <div className='tasks-list'>
          <TaskCard />
        </div>
      </div>
      <PrimaryBtn value='Add Task'/>
    </div>
  )
}

export default Tasks