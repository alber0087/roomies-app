/* eslint-disable react/prop-types */
import '../../../../components/BackBtn/BackBtn.css'

function PrevBtn({ onClick }) {


  return (
    <div className="back-btn-wrapper prev">
      <button className="back-btn" onClick={onClick}>
        Back
      </button>
    </div>
  )
}

export default PrevBtn
