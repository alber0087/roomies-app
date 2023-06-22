/* eslint-disable react/prop-types */
import './EditBtn.css'

function EditBtn({onClick}) {
  return (
    <div className="back-btn-wrapper">
      <button className="back-btn" onClick={onClick} >
        Edit
      </button>
    </div>
  )
}

export default EditBtn