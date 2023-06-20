/* eslint-disable react/prop-types */
import CheckBox from '../../components/Checkbox/Checkbox'
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import './TaskCard.css'

function TaskCard({ task, title, onTaskStatusChange, onTaskDeletion }) {
  const handleCheckboxChange = () => {
    onTaskStatusChange(task.id)
  }

  const handleDeleteButtonClick = () => {
    onTaskDeletion(task.id)
  }
 
  return (
    <div className="task-wrapper">
      <CheckBox callToAction={handleCheckboxChange}/>
      {title}
      <DeleteBtn callToAction={handleDeleteButtonClick}/>
    </div>
  )
}

export default TaskCard
