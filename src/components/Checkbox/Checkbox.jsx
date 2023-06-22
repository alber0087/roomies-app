/* eslint-disable react/prop-types */

import './Checkbox.css'

function Checkbox({ onChange, defaultChecked }) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        onChange={onChange}
        checked={!defaultChecked}
      />
      <span className='checkmark'></span>
    </div>
  )
}

export default Checkbox