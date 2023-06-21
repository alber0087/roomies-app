import{ useState } from 'react'
import { Image } from 'cloudinary-react'
import axios from 'axios'
import { TextField } from '@mui/material'


 function ImageUploader() {
     const [imageUrl, setImageUrl] = useState('')

     const handleImageUpload = async (event) => {
       const file = event.target.files[0]

       const formData = new FormData()
       formData.append('file', file)
       formData.append('upload_preset', 'rcesppfp')

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
     console.log(imageUrl)
     return (
       <div>
         <input type="file" onChange={handleImageUpload} />
         {imageUrl && <Image cloudName="ayoze" publicId={imageUrl} />}
       </div>
     )
 }


export default ImageUploader