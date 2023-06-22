/* eslint-disable react/prop-types */
import '../../../components/BackBtn/BackBtn.css'

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