import { useState } from 'react'
import './CreateCommunity.css'
import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  TextField,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createCommunity } from '../../services/community.service'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

/* const regexRoom = /^[1-9]$/ */

function CreateCommunity() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [rooms, setRooms] = useState(0)

  const navigate = useNavigate()
  /* const [image, setImage] = useState(null) */

  const handleName = (e) => {
    const name = e.target.value
    setName(name)
  }

  const handleAddress = (e) => {
    const address = e.target.value
    setAddress(address)
  }

  const handleRoom = (e) => {
    e.preventDefault()
    const rooms = parseInt(e.target.value)

    setRooms(rooms)
  }

  /* 
  const handleImage = (e) => {
    const image = e.target.files[0]
    setImage(image)
  }
 */

  const createCommunitY = async () => {
    if (name.length <= 0) {
      return alert('The name cannot empty')
    } else {
      await createCommunity(name, address, rooms)
      if (!localStorage.getItem('token')) alert('no tienes token')
      else navigate('/dashboard')
    }
  }

  return (
    <>
      <div className="create-container">
          <FormControl className='wrapper-create'>
            <CardContent>
              <TextField
                type="text"
                value={name}
                label="Community name"
                variant="filled"
                onChange={handleName}
              />
              <TextField
                type="text"
                value={address}
                label="Address"
                variant="filled"
                onChange={handleAddress}
              />
              <TextField
                type="number"
                value={rooms}
                className="input-createCommunity"
                margin="dense"
                label="Rooms"
                variant="filled"
                onChange={handleRoom}
              />
              <div>Upload Image</div>
              <TextField
                className="file-input input-createCommunity"
                type="file"
                margin="dense"
                variant="filled"
                /*               onChange={handleImage} */
              />
            </CardContent>

            <CardActions>
              <PrimaryBtn
                callToAction={createCommunitY}
                value={'Create Community'}
              />
            </CardActions>
          </FormControl>
      </div>
    </>
  )
}

export default CreateCommunity
