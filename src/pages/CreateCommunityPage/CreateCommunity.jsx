import { useState } from 'react'
import './CreateCommunity.css'
import { CardActions, CardContent, FormControl, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { createCommunity } from '../../services/community.service'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

import SelectCity from './SelectCity/SelectCity'
import ImageCommunity from './ImageCommunity/ImageCommunity'

/* const regexRoom = /^[1-9]$/ */

function CreateCommunity() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [rooms, setRooms] = useState(0)
  const [selectedCity, setSelectedCity] = useState('')
  const [image, setImage] = useState('')

  const receiveImage = (data) => {
    setImage(data)
  }


  const handleCitySelection = (city) => {
    setSelectedCity(city)
  }

  const navigate = useNavigate()

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

  const createCommunitY = async () => {
    if (name.length <= 0) {
      return alert('The name cannot empty')
    } else if (address.length <= 0) {
      return alert('The address cannot empty')
    } else if (selectedCity.length <= 0) {
      return alert('The city cannot empty')
    } else if (image.length <= 0) {
      return alert('The image cannot empty')
    } else {
      await createCommunity(name, selectedCity, address, rooms, image)
      if (!localStorage.getItem('token')) alert('no tienes token')
      else navigate('/dashboard')
    }
  }

  return (
    <>
      <div className="create-container">
        <FormControl className="wrapper-create">
          <CardContent>
            <TextField
              className="input-createCommunity"
              type="text"
              value={name}
              size="large"
              label="Community name"
              variant="filled"
              onChange={handleName}
            />

            <SelectCity onCitySelected={handleCitySelection} />

            <TextField
              className="input-createCommunity"
              type="text"
              value={address}
              size="large"
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

            <ImageCommunity data={receiveImage} />
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
