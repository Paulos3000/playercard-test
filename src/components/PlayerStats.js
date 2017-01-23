import React, { Component } from 'react'
import positionMap from '../static/data/positionMap'

import PlayerHeader from './PlayerHeader'
import StatContainer from './StatContainer'

const PlayerStats = ({ playerId, playerData }) => {

   let playerObj, currentPlayer

   // once api response has been received...
   if (playerData) {

      // find specific player object
      playerObj = playerData.find(player => player.player.id === playerId)

      // Deconstruct variables for shorthand use
      const {name} = playerObj.player
      const {position} = playerObj.player.info
      const {stats} = playerObj

      // helper function to find stat value by input attribute string
      const findStat = (attribute) => {
         return stats.find(stat => stat.name === attribute)
      }

      // DEFINE CURRENT PLAYER OBJECT
      currentPlayer = {
         fullName: `${name.first} ${name.last}`,   // ES6 Template String to assign full name string
         position: positionMap[position],    // use 'positionMap' object to assign full position string
         appearances: findStat('appearances'),
         goals: findStat('goals'),
         fwdPass: findStat('fwd_pass'),
         bwdPass: findStat('backward_pass'),
         mins: findStat('mins_played'),
         assists: findStat('goal_assist'),
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

         {!currentPlayer ? (
            <div>
               <h2 className='loading'>Loading Player Content</h2>
            </div>
            ) : (
            <div>
               <PlayerHeader currentPlayer={currentPlayer} />
               <StatContainer currentPlayer={currentPlayer} />
            </div>
         )}

      </div>
   )
}

export default PlayerStats
