import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  TextField,
} from '@mui/material'
import './InviteUser.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { joinCommunity } from '../../services/community.service'
import { useState } from 'react'

function InviteUser() {
  const [id, setId] = useState('')
  const navigate = useNavigate()

  const handleInvite = (e) => {
    const id = e.target.value
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
      <Header />
      <div className="signup-container">
        <Card
          sx={{
            backgroundColor: 'var(--primary-color)',
            borderRadius: '20px',
            boxShadow: 'none',
          }}
          className="container-signup"
        >
          <FormControl className="wrapper-signup">
            <div className="signup-title">Invitation Code</div>
            <CardContent>
              <TextField
                className="input-signup"
                style={{
                  width: '326px',
                  height: '46px',
                }}
                onChange={handleInvite}
                size="small"
                label="Code"
                variant="filled"
              />
            </CardContent>

            <CardActions>
              <Button
                className="button-create"
                sx={{ backgroundColor: 'var(--secondary-color)' }}
                size="large"
                variant="contained"
                onClick={handleCreate}
              >
                Create Community
              </Button>
              <Button
                className="button-create"
                sx={{ backgroundColor: 'var(--secondary-color)' }}
                size="large"
                variant="contained"
                onClick={joinToCommunity}
              >
                Join
              </Button>
            </CardActions>
          </FormControl>
        </Card>
      </div>
    </>
  )
}

export default InviteUser
