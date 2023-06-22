import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

import './Login.css'

import { login } from '../../services/auth.service'
import { getUserLogged } from '../../services/user.service'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPassVisible, setIsPassVisible] = useState(false)





  const navigate = useNavigate()

  const handleClick = () => {
    setIsPassVisible(!isPassVisible)
  }

  const handleEmail = (value) => {
    setEmail(value.target.value)
  }

  const handlePassword = (value) => {
    setPassword(value.target.value)
  }
 
  const logIn = async () => {
    await login(email, password)

  
    const user = await getUserLogged()
    if (!localStorage.getItem('token')) return  alert('Error: user or password wrong')
    else if (user.communityId === null ) navigate('/invite')
    else navigate('/dashboard')
  }

  


  return (
    <>
      <Header />
      <div className="login-container">
        <Card
          sx={{
            backgroundColor: 'var(--primary-color)',
            borderRadius: '20px',
            boxShadow: 'none',
          }}
          className="container-login"
        >
          <CardContent>
            <div className="signup-title">Log in</div>
            <Box>
              <TextField
                fullWidth
                label="Email"
                variant="filled"
                onChange={handleEmail}
              />
              <TextField
                fullWidth
                label="Password"
                variant="filled"
                onChange={handlePassword}
                type={isPassVisible ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClick}>
                      {isPassVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
              className='button-create'
              variant="contained"
              sx={{ backgroundColor: 'var(--secondary-color)' }}
              onClick={logIn}
            >
              Login
            </Button>
          </CardActions>
          <Typography className="forgot-password">Forgot password</Typography>
          <Typography className="signup">
            <Link to='/signup'>
              Sign up
            </Link>
          </Typography>
        </Card>
      </div>
    </>
  )
}

export default Login
