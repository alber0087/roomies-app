import { getUserLogged } from '../../services/user.service'
import './ProfilePage.css'
import { useEffect, useState } from 'react'
import EditBtn from './EditBtn/EditBtn'
import EditProfile from './EditProfile/EditProfile'
import Spinner from '../../components/Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn'

function ProfilePage() {
  const [person, setPerson] = useState([])
  const [profile, setProfile] = useState(false)
  const [image, setImage] = useState('')

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  function Profile() {
    return (
      <div className="container">
        <div className="wrapper wrapper-profile">
          <EditBtn onClick={changeComponent} />
          <div className='flexbox'>
            {person.image && (
              <div className="image-profile">
                <img
                  width={160}
                  height={160}
                  src={person.image}
                  alt="Imagen de perfil"
                />
              </div>
            )}
            <div className="user-name">{person.firstName}</div>
            <div className="data-profile">
              <div className="space">
                <span className="strong">Birthday: </span>
                <div>
                  {person.birth_date === null ? 'Empty' : person.birth_date}
                </div>
              </div>
              <div className='space'>
                <span className="strong">Gender: </span>
                <div>
                  {person.gender === null ? 'Empty' : person.gender}
                </div>
              </div>
              <div className='space'>
                <span className="strong">Smoker: </span>
                <div>
                  {person.smoker === null ? 'Empty' : person.smoker}
                </div>
              </div>
            </div>

            <div className="description">
              <span className="strong">Description :</span>
              <div className="description">{person.description}</div>
            </div>
            <div className='logout-btn'>
              <PrimaryBtn value={'Logout'} callToAction={logout} />
            </div>
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
        <Profile image={image} />
      )}
    </>
  )
}

export default ProfilePage
