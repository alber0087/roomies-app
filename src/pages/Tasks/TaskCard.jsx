import  CheckBox  from '../../components/Checkbox/Checkbox'
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn'
import './TaskCard.css'

function TaskCard() {
  return (
    <div className='task-wrapper'>
      <CheckBox />
      TaskCard
      <DeleteBtn />
    </div>
  )
}

export default TaskCard