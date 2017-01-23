import React from 'react'

const Profile = ({ currentPlayer }) => (
   <div className='player-header'>
      <h2>{currentPlayer ? currentPlayer.fullName : 'Name Here'}</h2>
      <h3>{currentPlayer ? currentPlayer.position : 'Position Here'}</h3>
   </div>
)

export default Profile
