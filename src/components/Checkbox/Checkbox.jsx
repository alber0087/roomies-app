import { CallToAction } from '@mui/icons-material'
import './Checkbox.css'

function Checkbox() {
  return (
    <div className='checkbox'>
      <input type="checkbox" onChange={CallToAction} checked={}/>
    </div>
  )
}

export default Checkbox