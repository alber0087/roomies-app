import profilePic from '../../assets/alber2.jpg'
import communityPic from '../../assets/apartment.jpeg'

import './Card.css'

function Card() {
  return (
    <div className='wrapper'>
      <div className='card-header'>
        <div className='profile-photo-wrapper'>
          <img src={profilePic} />
        </div>
        <div className='community-name'>
          <div>My Community</div>
          <div>Las Palmas de GC</div>
        </div>
      </div>
      <div className='card-body'>
        <img src={communityPic} />
      </div>
    </div>
  )
}

export default Card