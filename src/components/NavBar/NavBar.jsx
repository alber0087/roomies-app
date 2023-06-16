import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar({ isWideScreen }) {
  console.log(isWideScreen)
  return (
    <>
      <div className={isWideScreen ? 'wide-screen-nav' : 'mobile-nav'}>
        <ul>
          <li>
            <Link to='/dashboard'>Home</Link>
          </li>
          <li>
            <Link to='/expenses'>Expenses</Link>
          </li>
          <li>
            <Link to='/calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='/tasks'>Tasks</Link>
          </li>
          <li>
            <Link to='/chat'>Chat</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar