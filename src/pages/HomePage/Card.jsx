import { useState, useEffect } from 'react'

import profilePic from '../../assets/alber2.jpg'
import communityPic from '../../assets/apartment.jpeg'

import './Card.css'

function Card() {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      windowWidth > 767 ? setShowCard(true) : setShowCard(false)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="wrapper">
      <div className="card-header">
        <div className="profile-photo-wrapper">
          <img src={profilePic} />
        </div>
        <div className="community-name">
          <div>My Community</div>
          <div>Las Palmas de GC</div>
        </div>
      </div>
      <div className="card-body">
        <div className="img-card">
          <img src={communityPic} />
        </div>
        {showCard && <div className="community-card">Community Details:</div>}
        <div className="members-card">Community Members:</div>
        {showCard && (
          <div className="map-container">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&format=gif&zoom=14&size=300x200&key=AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
