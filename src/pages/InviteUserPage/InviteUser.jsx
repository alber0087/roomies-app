import { Button, Card, CardActions, CardContent, FormControl, TextField } from '@mui/material'
import './InviteUser.css'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function InviteUser() {
const navigate = useNavigate()

const handleCreate = () => {
  if (!localStorage.getItem('token')) alert('You need login first')  
  else navigate('/create')
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
            </CardActions>
          </FormControl>
        </Card>
      </div>
    </>
  )
}

export default InviteUser