import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

import './SignupPage.css'

import { signup } from '../../services/auth.service'
import { getUsers } from '../../services/user.service'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passRegex = /^(?=.*\d)(.{5,})\1$/

function SignupPage() {
  const [isPassvisible, setIsPassVisible] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validRepeatPassword, setValidRepeatPassword] = useState(false)
  const [user, setUser] = useState([])

  const getUsersEmail = async () => {
    if (localStorage.getItem('token')) {
      const res = await getUsers()
      setUser(res)
    }
  }

  useEffect(() => {
    getUsersEmail()
  }, [])

  const navigate = useNavigate()

  const validateName = (e) => {
    const name = e.target.value
    setName(name)
  }

  const validatePassword = (e) => {
    const password = e.target.value
    setPassword(password)
    if (!passRegex.test(password)) {
      setValidPassword(false)
    } else {
      setValidPassword(true)
      if (password === repeatPassword) {
        setValidRepeatPassword(true)
      } else {
        setValidRepeatPassword(false)
      }
    }
  }
  const validateRepeatPassword = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)
    if (password === repeatPassword) {
      setValidRepeatPassword(true)
      setValidPassword(true)
    } else {
      setValidRepeatPassword(false)
      setValidPassword(false)
    }
  }

  const validateEmail = (e) => {
    const email = e.target.value
    setEmail(email)
    if (!emailRegex.test(email)) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const formValidate = (e) => {
    e.preventDefault()
    if (
      valid !== true ||
      validPassword !== true ||
      validRepeatPassword !== true
    ) {
      return alert('Verify the fields')
    } else {
      return alert('your connect')
    }
  }

  const handleClick = () => {
    setIsPassVisible(!isPassvisible)
  }

  const signUp = async () => {
    user.map((u) => {
      if (email === u.email) {
        alert('This email is alredy used')
      }
    })

    if (valid !== true) {
      alert('verify your email')
    } else if (validPassword !== true) {
      alert('verify your password')
    } else {
      await signup(name, email, password)
      if (!localStorage.getItem('token')) alert('Error')
      else navigate('/invite')
    }
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
          <FormControl className="wrapper-signup" onSubmit={formValidate}>
            <div className="signup-title">Sign up</div>
            <CardContent>
              <TextField
                className="input-signup"
                style={{
                  width: '326px',
                  height: '46px',
                }}
                size="small"
                label="Name"
                onChange={validateName}
                variant="filled"
              />
              <TextField
                style={{
                  width: ' 326px',
                  height: '46px',
                }}
                className="input-signup"
                size="small"
                margin="dense"
                label="email"
                color={valid ? 'info' : 'error'}
                value={email}
                onChange={validateEmail}
                variant="filled"
              />
              <TextField
                style={{
                  width: ' 326px',
                  height: '46px',
                }}
                value={password}
                className="input-signup"
                size="small"
                label="Password"
                variant="filled"
                margin="dense"
                type={isPassvisible ? 'text' : 'password'}
                onChange={validatePassword}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleClick}>
                      {isPassvisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
              <TextField
                style={{
                  width: ' 326px',
                  height: '46px',
                }}
                value={repeatPassword}
                type={isPassvisible ? 'text' : 'password'}
                color={validRepeatPassword ? 'info' : 'error'}
                onChange={validateRepeatPassword}
                className="input-signup"
                size="small"
                label="Repeat Password"
                variant="filled"
              />
            </CardContent>

            <CardActions>
              <Button
                className="button-create"
                sx={{ backgroundColor: 'var(--secondary-color)' }}
                size="large"
                variant="contained"
                onClick={signUp}
              >
                Create Account
              </Button>
            </CardActions>
            <Typography className="signup">
              <Link to="/login">Login</Link>
            </Typography>
          </FormControl>
        </Card>
      </div>
    </>
  )
}

export default SignupPage
