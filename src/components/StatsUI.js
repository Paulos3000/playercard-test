import React, { Component } from 'react'

const StatsUI = ({ playerId, playerData }) => {

   // Create map to translate position
   const positionMap = {
      D: 'Defender',
      M: 'Midfielder',
      F: 'Forward',
   }

   let playerObj, currentPlayer

   // once api response has been received...
   if (playerData) {

      playerObj = playerData.find(player => player.player.id === playerId)
      console.log('playerObj: ', playerObj)

      // get current player info/stats...
      currentPlayer = {
         fullName: `${playerObj.player.name.first} ${playerObj.player.name.last}`,
         position: positionMap[playerObj.player.info.position],

         appearances: playerObj.stats.find(stat => stat.name === 'appearances'),
         goals: playerObj.stats.find(stat => stat.name === 'goals'),
         fwdPass: playerObj.stats.find(stat => stat.name === 'fwd_pass'),
         bwdPass: playerObj.stats.find(stat => stat.name === 'backward_pass'),
         mins: playerObj.stats.find(stat => stat.name === 'mins_played'),
         assists: playerObj.stats.find(stat => stat.name === 'goal_assist'),

         goalsPerMatch: function() {
            let value = this.goals.value / this.appearances.value
            return value.toFixed(2)
         },
         passesPerMin: function() {
            let value = (this.fwdPass.value + this.bwdPass.value) / this.mins.value
            return value.toFixed(2)
         }
      }
   }

   return (
      <div className='card-section stats-section'>
         {!playerObj ? '' :
         <div>
            <div className='player-header'>
               <h2>{currentPlayer.fullName}</h2>
               <h3>{currentPlayer.position}</h3>
            </div>
            <div className='stat-container'>
               <div className='stat-field'>
                  <p><span>Appearances</span><span>{currentPlayer.appearances.value}</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Goals</span><span>{currentPlayer.goals.value}</span></p>
               </div>
               <div className='stat-field'>
                  <p>
                     <span>Assists</span>
                     <span>{!currentPlayer.assists ? '' : currentPlayer.assists.value}</span>
                  </p>
               </div>
               <div className='stat-field'>
                  <p><span>Goals per match</span><span>{currentPlayer.goalsPerMatch()}</span></p>
               </div>
               <div className='stat-field'>
                  <p><span>Passes per minute</span><span>{currentPlayer.passesPerMin()}</span></p>
               </div>
            </div>
         </div>}

      </div>
   )
}

export default StatsUI
