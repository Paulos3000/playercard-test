import React from 'react'

import StatField from './StatField'

const StatContainer = ({ currentPlayer }) => (
   <div className='stat-container'>
      <StatField
         attribute={'Appearances'}
         value={!currentPlayer.appearances ? '?' : currentPlayer.appearances.value}
      />
      <StatField
         attribute={'Goals'}
         value={!currentPlayer.goals ? '?' : currentPlayer.goals.value}
      />
      <StatField
         attribute={'Assists'}
         value={!currentPlayer.assists ? '?' : currentPlayer.assists.value}
      />
      <StatField
         attribute={'Goals per match'}
         value={currentPlayer.goalsPerMatch()}
      />
      <StatField
         attribute={'Passes per minute'}
         value={currentPlayer.passesPerMin()}
      />
   </div>
)

export default StatContainer
