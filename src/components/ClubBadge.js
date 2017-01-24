import React from 'react'

const ClubBadge = ({ playerId, playerData }) => {

   let playerObj, teamId
   if (playerData) {
      // find specific player object and use that to find current teamId
      playerObj = playerData.find(player => player.player.id === playerId)
      teamId = playerObj.player.currentTeam.id
   }

   return (
      <div className='ellipse'>
         {!playerObj ? (
            <div className={`club-badge badge-blank`}>
            </div>
            ) : (
            <div className={`club-badge badge-${teamId}`}>
            </div>
         )}
      </div>
   )
}

export default ClubBadge
