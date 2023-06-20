/* eslint-disable react/prop-types */
import CheckBox from '../../components/Checkbox/Checkbox'
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import './TaskCard.css'

function TaskCard({ title }) {
  return (
    <div className="task-wrapper">
      <CheckBox />
      {title}
      <DeleteBtn />
    </div>
  )
}

export default TaskCard
