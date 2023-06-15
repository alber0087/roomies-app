/* eslint-disable react/prop-types */
import './PrimaryBtn.css'

function PrimaryBtn({ value, callToAction}) {
  return (
    <div>
      <button className='primary-btn' onClick={callToAction}>{value}</button>
    </div>
  )
}

export default PrimaryBtn