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
import ImageUploader from '../ImageInput/ImageInput'
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn'
import PrevBtn from './PrevBtn/PrevBtn'

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
      resultName,
      lastName,
      resultSmoker,
      resultDescription,
      resultGender,
      resultBirthday,
      resultImage
    )
    changeComponent()
  }

  const validateFirstName = () => {
     if (name === '' && person.firstName !== null) {
      return person.firstName
    } else {
      return name
    }
  }

    const validateDescription = () => {
     
      if (description === '' && person.description !== null) {
        return person.description
      } else {
        return description
      }
    }


  const validateGender = () => {
   
    if (gender === '' && person.gender !== null) {
      return person.gender
    } else {
      return gender
    }
  }

  const validateSmoker = () => {

     if (smoker === '' && person.smoker !== null) {
      return person.smoker
    } else {
      return smoker
    }
  }

  const validateBirthday = () => {
    if (birthday === '' && person.birth_date !== null) {
      return person.birth_date
    } else {
      return birthday
    }
  }

 

  const resultDescription = validateDescription()
  const resultName = validateFirstName()
  const resultBirthday = validateBirthday()
  const resultGender = validateGender()
  const resultSmoker = validateSmoker()
  sendData(resultName)

  
 useEffect(() => {
   validateDescription()
   validateFirstName()
   validateBirthday()
   validateGender()
   validateSmoker()
 }, [description, name, birthday, gender, smoker])

  return (
    <div className="container">
      <div className="wrapper wrapper-profile">
        <PrevBtn onClick={changeComponent} />
        <div className="wrapper-form">
          <ImageUploader
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
            onDatosRecibidos={handleDatosRecibidos}
            person={person}
            setPerson={setPerson}
            setImage={setImage}
            resultImage={resultImage}
          />
          <TextField
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
            size="small"
            label="First Name"
            type="text"
            value={resultName}
            onChange={handleName}
          />
          <TextField
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
            size="small"
            label="Last Name"
            type="text"
            value={lastName}
            onChange={handleLastName}
          />
          <TextField
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
            size="small"
            type="date"
            value={resultBirthday}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleBirthday}
          />
          <FormControl
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
          >
            <InputLabel id="gender-label">Gender</InputLabel>
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
          <FormControl
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
          >
            <InputLabel id="smoker-label">Smoker</InputLabel>
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
            style={{ width: '80%', background: 'white', borderRadius: '4px' }}
            size="small"
            label="Description"
            multiline
            rows={4}
            value={resultDescription}
            onChange={handleDescription}
          />
          <br />
          <PrimaryBtn callToAction={updateProfile} value={'Update Profile'} />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
