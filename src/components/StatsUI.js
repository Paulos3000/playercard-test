import React, { Component } from 'react'

const StatsUI = ({ playerId, playerData }) => {

   // Visible Player object: use this to dynamically populate the component
   let visiblePlayer = null
   // once api response has been received, assign variable according to active playerId
   if (playerData) {
      visiblePlayer = playerData.find(player => player.player.id === playerId)
   }

   // Create string for player's full name
   const fullName = () => {
      return `${visiblePlayer.player.name.first} ${visiblePlayer.player.name.last}`
   }

   // Create map to translate position
   const positionMap = {
      D: 'Defender',
      M: 'Midfielder',
      F: 'Forward',
   }
   const position = () => {
      return positionMap[visiblePlayer.player.info.position]
   }

   // console.log('playerName: ', playerName)

   return (
      <div className='card-section stats-section'>

         {!visiblePlayer ? '' :
         <div>
            <div className='player-header'>
               <h2>{fullName()}</h2>
               <h3>{position()}</h3>
            </div>
            <div className='stat-container'>
               <div className='stat-field'>
                  <p><span>Appearances</span><span>10</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Goals</span><span>5</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Assists</span><span>2</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Goals per match</span><span>0.06</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Passes per minute</span><span>0.26</span></p>
               </div>
            </div>
         </div>}

      </div>
   )
}

export default StatsUI
