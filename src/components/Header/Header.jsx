import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <>
      <div className='header'>
        <div className="logo">
        <Link to='/dashboard'>
          <img src={logo}/>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Header