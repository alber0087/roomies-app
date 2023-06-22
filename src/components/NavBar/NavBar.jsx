/* eslint-disable react/prop-types */

import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar({ isWideScreen }) {
  const location = useLocation()
  const route = location.pathname

  return (
    <>
      <div className={isWideScreen ? 'wide-screen-nav' : 'mobile-nav'}>
        <ul>
          <li className={route === '/dashboard' ? 'active' : ''}>
            <Link to="/dashboard">Home</Link>
          </li>
          <li className={route === '/expenses' ? 'active' : ''}>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li className={route === '/calendar' ? 'active' : ''}>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className={route === '/tasks' ? 'active' : ''}>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li className={route === '/chat' ? 'active' : ''}>
            <Link to="/chat">Chat</Link>
          </li>
          <li className={route === '/profile' ? 'active' : ''}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar