import './EditBtn.css'

function EditBtn({onClick}) {
  return (
    <div className="edit-btn-wrapper">
      <button className="edit-btn" onClick={onClick} >
        Edit
      </button>
    </div>
  )
}

export default EditBtn