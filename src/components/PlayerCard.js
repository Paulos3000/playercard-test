import React, { Component } from 'react'

// import components...
import AvatarUI from './AvatarUI'
import StatsUI from './StatsUI'
import ClubBadge from './ClubBadge'

// Render club badge in THIS component, absolute positioned.

export default class PlayerCard extends Component {
   render() {
      return (
         <div className='playercard'>
            <AvatarUI />
            {/* <ClubBadge /> */}
            <StatsUI />
         </div>
      )
   }
}
