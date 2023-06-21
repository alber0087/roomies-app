/* eslint-disable react/prop-types */
import './AddBtn.css'

function AddBtn({ value }) {
  return (
    <div>
      <button type='submit' className='submit-btn'>{value}</button>
    </div>
  )
}

export default AddBtn