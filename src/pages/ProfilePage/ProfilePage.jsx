import { getUserLogged } from '../../services/user.service'
import './ProfilePage.css'
import { useEffect, useState } from 'react'
import EditBtn from './EditBtn/EditBtn'
import EditProfile from './EditProfile/EditProfile'
function ProfilePage() {
  const [person, setPerson] = useState([])
  const [profile, setProfile] = useState(false)
  const [image, setImage] = useState('')

  function Profile() {
 




    return (
      <div className="container">
        <div className="wrapper">
          <EditBtn onClick={changeComponent} />
          <div className="image-profile">
            <img width={200} height={200} src={person.image} alt="Imagen de perfil" />
          </div>
          <div
            style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            {person.firstName}
          </div>
          <br />
          <ul className="data-profile">
            <li>
              Birthday:{' '}
              {person.birth_date === null ? 'Empty' : person.birth_date}
            </li>
            <li>Gender: {person.gender === null ? 'Empty' : person.gender}</li>
            <li>Smoker: {person.smoker === null ? 'Empty' : person.smoker}</li>
          </ul>

          <div className="description">
            <strong>Description :</strong> <br />
            {person.description}
          </div>
        </div>
      </div>
    )
  }

  const changeComponent = () => {
    setProfile(true)
  }

  const getPerson = async () => {
    const res = await getUserLogged()
    setPerson(res)
  }

  const sendData = (datos) => {
    setImage(datos)
  }

  useEffect(() => {
    sendData()
  }, [person])

  useEffect(() => {
    getPerson()
  }, [profile])


  return (
    <>
      {profile ? (
        <EditProfile
          sendData={sendData}
          person={person}
          setPerson={setPerson}
          setProfile={setProfile}
        />
      ) : (
        <Profile image={image}/>
      )}
    </>
  )
}

export default ProfilePage
