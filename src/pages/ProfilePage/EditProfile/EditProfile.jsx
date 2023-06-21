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




function EditProfile({ person, setProfile }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [smoker, setSmoker] = useState('')
  const [description, setDescription] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [image, setImage] = useState(null)
  const id = person.id
  




  useEffect(() => {
   
  }, [])

  const handleImageChange = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = () => {
    setImage(reader.result)
  }

  if (file) {
    reader.readAsDataURL(file)
  }
}


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

  const updateProfile = async () => {
    await updateUserService(
      id,
      name,
      lastName,
      resultSmoker,
      description,
      resultGender,
      resultBirthday
    )
    changeComponent()
  }

  const validateGender =  () => {
     if (person &&  person.gender === null ) {
    return 'Other'
    } else if (gender === '' &&  person.gender !== null) {
      return  person.gender
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
      return 'Empty'
    } else if (birthday === '' && person.birth_date !== null) {
      return person.birth_date
    } else {
      return birthday
    }
  }


const resultBirthday = validateBirthday()
const resultGender = validateGender()
const resultSmoker = validateSmoker()


  return (
    <div className="container">
      <div className="wrapper">
        <div className="image-profile">
          <img width={100} src={image} alt="Profile" />
        </div>
        <br />
        <div className="wrapper-form">
          <ImageUploader/>
          <TextField
            style={{ width: '80%' }}
            size="small"
            type="file"
            onChange={handleImageChange}
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
          <button onClick={updateProfile}>Update Profile</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
