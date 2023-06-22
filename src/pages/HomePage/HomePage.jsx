/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Snackbar } from '@mui/material'

import Card from './Card'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

import './HomePage.css'

import { getCommunityId } from '../../services/community.service'
import { getUsersByCommunityId } from '../../services/user.service'


function HomePage() {
  const [open, setOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [community, setCommunity] = useState({})

  const generateInvitationLink = () => {
    const baseUrl = 'https://roomiesapi-production.up.railway.app/api/communities/profile'
    const shortBaseUrl = 'https://goo.su/fXzfxLL'
    const invitationLink = `${shortBaseUrl}/${community.id}`

    navigator.clipboard.writeText(invitationLink)

    setOpen(true)
  }

  const getCommunityInfo = async () => {
    const res = await getCommunityId()
    setCommunity(res)
    if (!localStorage.getItem('token')) alert('no tienes token')
  }

const getCommunityUsers = async () => {
  try {
    const res = await getUsersByCommunityId()
    setUsers(res)
  } catch (error) {
    console.error('Error fetching community users:', error)
  }
}

  useEffect(() => {
    getCommunityInfo()
    getCommunityUsers()
  }, [])
  
  const message = 'QR Code successfully copied to clipboard!!'

  return (
    <div className="container">
      <Card 
        community={community}
        users={users}
      />
      <PrimaryBtn value="Generate invitation code" callToAction={generateInvitationLink} />
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
