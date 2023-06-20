import { useState, useEffect } from 'react'
import './Createcommunity.css'
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

import SelectCity from './SelectCity/SelectCity'

/* const regexRoom = /^[1-9]$/ */

function CreateCommunity() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [rooms, setRooms] = useState(0)
  const [selectedCity, setSelectedCity] = useState('')

  const handleCitySelection = (city) => {
    setSelectedCity(city)
  }

  console.log(selectedCity)

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
      await createCommunity(name, selectedCity, address, rooms)
      if (!localStorage.getItem('token')) alert('no tienes token')
      else navigate('/dashboard')
    }
  }

  return (
    <>
      <Card
        sx={{ backgroundColor: '#8ABE53', borderRadius: '0' }}
        className="container-createcommunity"
      >
        <FormControl className="wrapper-signup">
          <CardContent>
            <TextField
              className="input-createCommunity"
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '157px',
              }}
              type="text"
              value={name}
              size="large"
              label="Community name"
              variant="filled"
              onChange={handleName}
            />
            <TextField
              className="input-createCommunity"
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '331px',
              }}
              type="text"
              value={address}
              size="large"
              label="Address"
              variant="filled"
              onChange={handleAddress}
            />

            <SelectCity onCitySelected={handleCitySelection} />

            <TextField
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '417px',
              }}
              type="number"
              value={rooms}
              className="input-createCommunity"
              margin="dense"
              label="Rooms"
              variant="filled"
              onChange={handleRoom}
            />
            <label
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '488px',
              }}
            >
              Upload Image
            </label>
            <TextField
              style={{
                position: 'absolute',
                width: ' 326px',
                left: '32px',
                top: '504px',
              }}
              className="file-input input-createCommunity"
              type="file"
              size="large"
              margin="dense"
              variant="filled"
              /*               onChange={handleImage} */
            />
          </CardContent>

          <CardActions>
            <PrimaryBtn
              callToAction={createCommunitY}
              value={'Create Community'}
            ></PrimaryBtn>
          </CardActions>
        </FormControl>
      </Card>
    </>
  )
}

export default CreateCommunity
