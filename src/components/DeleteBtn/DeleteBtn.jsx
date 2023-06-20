/* eslint-disable react/prop-types */
import './DeleteBtn.css'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

function DeleteBtn({ onClick }) {
  return (
    <div className='delete-btn'>
      <DeleteOutlineOutlinedIcon  onClick={onClick}/>
    </div>
  )
}

export default DeleteBtn