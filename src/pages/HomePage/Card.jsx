/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import profilePic from '../../assets/alber2.jpg'
import communityPic from '../../assets/apartment.jpeg'

import './Card.css'

const API_KEY = 'AIzaSyAw-aTPzbceFSmmS4_JNjSO0j7UHv4sgP4'

function Card({ community, users }) {
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

  const CommunityInfo = () => {
    return (
      <div className="community-card">
        <div className="bold">Community name:</div>
        <div>{community.name}</div>
        <div className="bold">Address:</div>
        <div>{community.address}</div>
        <div className="bold">Rooms:</div>
        <div>{community.rooms}</div>
      </div>
    )
  }

  const CommunityMembers = () => {
    return (
      <div className="members-card bold">
        Community Members:
        {users && users.map((user) => {
          return (
            <div key={user.id}>{user.firstName}</div>
          )
        })}
      </div>

    )
  }

  return (
    <div className="wrapper">
      <div className="card-header">
        <div className="profile-photo-wrapper">
          <img src={profilePic} />
        </div>
        <div className="community-name">
          <div>{community.name}</div>
          <div>Las Palmas de GC</div>
        </div>
      </div>
      <div className="card-body">
        <div className="img-card">
          <img src={communityPic} />
        </div>
        {showCard && <CommunityInfo />}
        <CommunityMembers />
        {showCard && (
          <div className="map-container">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${community.address},LasPalmasdeGranCanaria&format=gif&zoom=16&size=300x200&key=${API_KEY}`}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
