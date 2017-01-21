import React, { Component } from 'react'
import axios from 'axios'

// import components...
import AvatarUI from './AvatarUI'
import StatsUI from './StatsUI'
import ClubBadge from './ClubBadge'

// Render club badge in THIS component, absolute positioned.

export default class PlayerCard extends Component {

   constructor(props) {
      super(props)
      // initialise state
      this.state = {
         playerData: {},
         selectedPlayer: null
      }
   }

   componentDidMount() {
      // pull in all player data (simulate api request with AJAX)
      axios.get('./data/player-stats.json')
         .then(res => {
            const playerData = res.data
            this.setState({ playerData });
         });
   }

   render() {

      console.log('this.state.playerData: ', this.state.playerData)

      return (
         <div className='playercard'>
            {/*<img src='/img/driulis-gonzalez.jpg' />*/}
            <AvatarUI />
            {/* <ClubBadge /> */}
            <StatsUI />
         </div>
      )
   }
}
