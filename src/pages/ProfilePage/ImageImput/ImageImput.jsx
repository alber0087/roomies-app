import { useEffect, useState } from 'react'
import { Image } from 'cloudinary-react'
import axios from 'axios'
import { InputLabel, TextField } from '@mui/material'

function ImageUploader({
  resultImage,

  onDatosRecibidos,
}) {
  const [imageUrl, setImageUrl] = useState('')

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'rcesppfp')
    console.log(resultImage)
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/ayoze/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      setImageUrl(response.data.secure_url)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  onDatosRecibidos(imageUrl)
  console.log(imageUrl)
  useEffect(() => {}, [imageUrl])

  return (
    <>
      <Image
        style={{ width: '200px' }}
        cloudName="ayoze"
        publicId={resultImage}
      />
      <InputLabel id="image-label">Update your image</InputLabel>
      <TextField
        labelid="image-label"
        type="file"
        style={{ width: '80%' }}
        size="small"
        onChange={handleImageUpload}
      />
    </>
  )
}

export default ImageUploader
