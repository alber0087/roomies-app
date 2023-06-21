import { getUserLogged } from '../../services/user.service'
import './ProfilePage.css'
import { useEffect, useState } from 'react'
import EditBtn from './EditBtn/EditBtn'
import EditProfile from './EditProfile/EditProfile'
function ProfilePage() {
  const [person, setPerson] = useState([])
  const [profile, setProfile] = useState(false)

  function Profile() {
    return (
      <div className="container">
        <div className="wrapper">
          <EditBtn onClick={changeComponent} />
          <div className="image-profile">
            <img width={200} src={person.image} alt="Imagen de perfil" />
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

  useEffect(() => {
    getPerson()
  }, [profile])
  console.log(person)

  return (
    <>
      {profile ? (
        <EditProfile
          person={person}
          setPerson={setPerson}
          setProfile={setProfile}
        />
      ) : (
        <Profile />
      )}
    </>
  )
}

export default ProfilePage
