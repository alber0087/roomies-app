import {
  Card,
  CardContent,
  FormControl,
  TextField,
} from '@mui/material'
import './InviteUser.css'
import { useNavigate } from 'react-router-dom'
import { joinCommunity } from '../../services/community.service'
import { useState } from 'react'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

function InviteUser() {
  const [id, setId] = useState('')
  const navigate = useNavigate()



  
  const handleInvite = (e) => {
    const url = e.target.value
    const searchNumber = Array.from(url).filter((char) =>
      /\d/.test(char)
    )
    const id = searchNumber.join('')
    setId(id)
  }

  const handleCreate = () => {
    if (!localStorage.getItem('token')) alert('You need login first')
    else navigate('/create')
  }

  const joinToCommunity = async () => {
    await joinCommunity(id)
    if (!localStorage.getItem('token')) alert('You need login first')
    navigate('/dashboard')
  }

  return (
    <>
      <div className="invite-container">
        <Card
          sx={{
            backgroundColor: 'var(--primary-color)',
            borderRadius: '20px',
            boxShadow: 'none',
          }}
          className="container-invite"
        >
          <FormControl className="wrapper-signup">
            <div className="signup-title">Invitation Code</div>
            <CardContent>
              <TextField
                className="input-signup"
                onChange={handleInvite}
                label="Code"
                variant="filled"
              />
            </CardContent>
            <PrimaryBtn value="Join community" callToAction={joinToCommunity} />
            <PrimaryBtn value="Create community" callToAction={handleCreate} />
          </FormControl>
        </Card>
      </div>
    </>
  )
}

export default InviteUser
