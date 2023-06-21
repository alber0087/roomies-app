/* eslint-disable react/prop-types */
import { useState } from 'react'
import CheckBox from '../../components/Checkbox/Checkbox'
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import './TaskCard.css'

function TaskCard({ task, title, onTaskStatusChange, onTaskDeletion }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCheckboxChange = () => {
    onTaskStatusChange(task.id)
  }

  const handleDeleteButtonClick = () => {
    onTaskDeletion(task.id)
  }

  const handleCardClick = () => {
    setIsExpanded(!isExpanded)
  }
 
  return (
    <>
      <div className="task-wrapper">
        <div className="task-main">
          <CheckBox
            onChange={handleCheckboxChange}
            defaultChecked={task.status === 'Pending'}
          />
          <div
            className={`${isExpanded ? 'expanded' : ''}`}
            onClick={handleCardClick}
          >
            <span className={task.status === 'Completed' ? 'done' : 'undone'}>{title}</span>
          </div>
          <DeleteBtn onClick={handleDeleteButtonClick} />
        </div>
        {isExpanded && (
          <div className="extend-info">
            <div>{task.description}</div>
            <div className='right'>{task.date}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default TaskCard
