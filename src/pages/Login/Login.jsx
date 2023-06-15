import { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, IconButton, TextField, Typography } from '@mui/material'
import './Login.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPassVisible, setIsPassVisible] = useState(false)

  const handleClick = () => {
    setIsPassVisible(!isPassVisible)
  }

  const handleEmail = (value) => {
    setEmail(value.target.value)
    console.log(email)
  }

  const handlePassword = (value) => {
    setPassword(value.target.value)
    console.log(password)
  }

  return (
    <Box className="login">
      <Card className="login-card" sx={{ bgcolor: 'transparent' }}>
        <CardContent>
          <Typography variant="h4">Log In</Typography>

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
            fullWidth
            variant="contained"
            sx={{ backgroundColor: 'var(--secondary-color)' }}
          >
            Login
          </Button>
        </CardActions>
        <Typography className="forgot-password">Forgot password</Typography>
        <Typography className="signup">Sign up</Typography>
      </Card>
    </Box>
  )
}

export default Login
