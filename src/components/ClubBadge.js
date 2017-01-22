import React from 'react'

const ClubBadge = ({ playerId, playerData }) => {

   // Visible Player object: use this to dynamically populate the component
   let visiblePlayer = null
   if (playerData) {
      visiblePlayer = playerData.find(player => player.player.id === playerId)
   }

   console.log('visiblePlayer: ', visiblePlayer)
   // const teamMap = {
   //    2064: 'Man-U',
   //    4148: 'Midfielder',
   //    4246: 'Forward',
   //    4916: 'sdas',
   //    8983: 'dsaf',
   // }

   return (
      <div className='ellipse badge-manu'>
         <div className={`club-badge badge-manu`}>
         </div>
      </div>
   )
}

export default ClubBadge
