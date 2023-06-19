import { useState, useEffect } from 'react'
import { Snackbar } from '@mui/material'

import Card from './Card'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

import './HomePage.css'

import { getCommunityId } from '../../services/community.service'



function HomePage() {
  const [open, setOpen] = useState(false)
  const [communityId, setCommunityId] = useState({})

  const handleClick = () => {
    setOpen(true)
  }

  const getCommunityInfo = async () => {
    const res = await getCommunityId()
    setCommunityId(res)
    if (!localStorage.getItem('token')) alert('no tienes token')
  }

  useEffect(() => {
    getCommunityInfo()
  }, [])

  console.log(communityId)
  
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
    </div>
  )
}

export default HomePage
