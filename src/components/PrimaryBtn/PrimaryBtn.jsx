/* eslint-disable react/prop-types */
import './PrimaryBtn.css'

function PrimaryBtn({ style, value, callToAction }) {
  return (
    <div>
      <button
        style={{ style }}
        className="primary-btn"
        onClick={callToAction}
      >
        {value}
      </button>
    </div>
  )
}

export default PrimaryBtn