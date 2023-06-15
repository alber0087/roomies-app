import { useState } from 'react'
import { Snackbar } from '@mui/material'

import Card from './Card'
import NavBar from '../../components/NavBar/NavBar'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

import './HomePage.css'

function HomePage() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const message = 'QR Code successfully copied to clipboard!!'

  return (
    <div className="container">
      <Card />
      <PrimaryBtn value="Generate invitation code" callToAction={handleClick} />
      <Snackbar 
        open={open} 
        onClose={() => setOpen(false)} 
        resumeHideDuration={1000} 
        message={message} 

      />
      <NavBar />
    </div>
  )
}

export default HomePage
