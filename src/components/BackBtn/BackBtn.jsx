import { useNavigate } from 'react-router-dom'
import './BackBtn.css'

function BackBtn() {
  const navigate = useNavigate()

  return (
    <div className='back-btn-wrapper'>
      <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default BackBtn