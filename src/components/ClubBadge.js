import React from 'react'

const ClubBadge = ({ playerId, playerData }) => {

   // Visible Player object: use this to dynamically populate the component
   let visiblePlayer = null
   let teamId = null

   if (playerData) {
      visiblePlayer = playerData.find(player => player.player.id === playerId)
      teamId = visiblePlayer.player.currentTeam.id
   }

   return (
      <div className='ellipse'>
         {!visiblePlayer ?
            <div className={`club-badge badge-blank`}>
            </div> :
            <div className={`club-badge badge-${teamId}`}>
            </div>
         }
      </div>
   )
}

export default ClubBadge
