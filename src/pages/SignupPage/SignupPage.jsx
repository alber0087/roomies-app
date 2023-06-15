import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  TextField,
} from '@mui/material'
import './SignupPage.css'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passRegex = /^(?=.*\d)(.{5,})\1$/




function SignupPage() {
  const [isPassvisible, setIsPassVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validRepeatPassword, setValidRepeatPassword] = useState(false)

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
      //setCheckBox(e.target.checked)
      setValid(true)
    }
  }
  const validatePower = () => {
    if (valid !== true) {
      alert('verify your email')
    } else if (validPassword !== true) {
      alert('verify your password')
    }
  }

  const formValidate = (e) => {
    e.preventDefault()
    if (
      valid !== true ||
      validPassword !== true ||
      /*  checkBox !== true || */
      validRepeatPassword !== true
    ) {
      return alert('Verify the fields')
    } else {
      console.log('entra')
      return alert('your connect')
    }
  }

  const handleClick = () => {
    setIsPassVisible(!isPassvisible)
  }

  console.log(email)
  console.log(password)

  return (
    <>
      <Card
        sx={{ backgroundColor: '#8ABE53', borderRadius: '0' }}
        className="container-signup"
      >
        <FormControl className="wrapper-signup" onSubmit={formValidate}>
          <CardContent>
            <TextField
              className="input-signup"
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '234px',
              }}
              size="large"
              label="Name"
              variant="filled"
            />
            <TextField
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '321px',
              }}
              className="input-signup"
              margin="dense"
              label="email"
              color={valid ? 'info' : 'error'}
              value={email}
              onChange={validateEmail}
              variant="filled"
            />
            <TextField
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '407px',
              }}
              value={password}
              className="input-signup"
              size="large"
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
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '494px',
              }}
              value={repeatPassword}
              type={isPassvisible ? 'text' : 'password'}
              color={validRepeatPassword ? 'info' : 'error'}
              onChange={validateRepeatPassword}
              className="input-signup"
              size="large"
              label="Repeat Password"
              variant="filled"
            />
          </CardContent>

          <CardActions>
            <Button
              className="button-create"
              style={{ backgroundColor: 'var(--secondary-color)' }}
              size="large"
              variant="contained"
              onClick={validatePower}
            >
              Create Account
            </Button>
          </CardActions>
        </FormControl>
      </Card>
    </>
  )
}

export default SignupPage
