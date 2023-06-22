/* eslint-disable react/prop-types */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import './EditProfile.css'
import { useEffect, useState } from 'react'
import { updateUserService } from '../../../services/user.service'
import ImageUploader from '../ImageImput/ImageImput'
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'

function EditProfile({ person, setPerson, setProfile, sendData }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [smoker, setSmoker] = useState('')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [image, setImage] = useState('')
  const id = person.id

  const handleDatosRecibidos = (datos) => {
    setImage(datos)
  }

  useEffect(() => {
    handleDatosRecibidos()
  }, [person])

  const changeComponent = () => {
    setProfile(false)
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleBirthday = (e) => {
    setBirthday(e.target.value)
  }

  const handleSmoker = (e) => {
    setSmoker(e.target.value)
  }
  const handleGender = (e) => {
    setGender(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const validateImage = () => {
    if (image === '' && person.image === '') {
      return ''
    } else if ((image === '' && person.image !== '')) {
      return person.image
    } else {
      return image
    }
  }

  const resultImage = validateImage()

  const updateProfile = async () => {
    await updateUserService(
      id,
      name,
      lastName,
      resultSmoker,
      description,
      resultGender,
      resultBirthday,
      resultImage
    )
    changeComponent()
  }

  const validateGender = () => {
    if (person && person.gender === null) {
      return 'Other'
    } else if (gender === '' && person.gender !== null) {
      return person.gender
    } else {
      return gender
    }
  }

  const validateSmoker = () => {
    if (person && person.smoker === null) {
      return 'No'
    } else if (smoker === '' && person.smoker !== null) {
      return person.smoker
    } else {
      return smoker
    }
  }

  const validateBirthday = () => {
    if (person && person.birth_date === null) {
      return null
    } else if (birthday === '' && person.birth_date !== null) {
      return person.birth_date
    } else {
      return birthday
    }
  }

  const resultBirthday = validateBirthday()
  const resultGender = validateGender()
  const resultSmoker = validateSmoker()

  sendData(resultImage)

  return (
    <div className="container">
      <div className="wrapper">
        <br />
        <div className="wrapper-form">
          <ImageUploader
            onDatosRecibidos={handleDatosRecibidos}
            person={person}
            setPerson={setPerson}
            setImage={setImage}
            resultImage={resultImage}
          />

          <TextField
            style={{ width: '80%' }}
            size="small"
            label="First Name"
            type="text"
            value={name}
            onChange={handleName}
          />
          <TextField
            style={{ width: '80%' }}
            size="small"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
          <TextField
            style={{ width: '80%' }}
            size="small"
            label="Birthdate"
            type="date"
            value={resultBirthday}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleBirthday}
          />
          <FormControl style={{ width: '80%' }}>
            <InputLabel id="gender-label">¿Gender?</InputLabel>
            <Select
              size="small"
              className="select"
              labelId="gender-label"
              value={resultGender}
              onChange={handleGender}
              variant="standard"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: '80%' }}>
            <InputLabel id="smoker-label">¿Es fumador?</InputLabel>
            <Select
              labelId="smoker-label"
              className="select"
              size="small"
              value={resultSmoker}
              onChange={handleSmoker}
              variant="standard"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            style={{ width: '80%' }}
            size="small"
            label="Descripción"
            multiline
            rows={4}
            value={description}
            onChange={handleDescription}
          />
          <br/>
          <PrimaryBtn callToAction={updateProfile} value={'Update Profile'} />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
