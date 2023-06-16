import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'

function Root() {
  const [showHeader, setShowHeader] = useState(false)
  const [isWideScreen, setIsWideScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      windowWidth > 767 
        ? setShowHeader(true) : setShowHeader(false)
      windowWidth > 767 
        ? setIsWideScreen(true) : setIsWideScreen(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {showHeader && <Header />}
      <Outlet />
      <NavBar isWideScreen={isWideScreen}/>
    </div>
  )
}

export default Root
