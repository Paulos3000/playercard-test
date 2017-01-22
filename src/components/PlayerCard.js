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
      console.log('initialise state')
      this.state = {
         playerData: {},
         selectedPlayer: null,
         menuIsOpen: true
      }
   }

   componentDidMount() {
      // pull in all player data (simulate api request with AJAX)
      axios.get('./data/player-stats.json')
         .then(res => {
            console.log('data fetch successful!')
            const playerData = res.data
            this.setState({ playerData });
         });
   }

   switchMenu = () => {
      this.setState({menuIsOpen: !this.state.menuIsOpen});
      console.log('menu is open: ', this.state.menuIsOpen)
   }

   render() {

      console.log('this.state.playerData: ', this.state.playerData)

      return (
         <div className='playercard'>
            <AvatarUI
               menuIsOpen={this.state.menuIsOpen}
               switchMenu={this.switchMenu}
            />
            <ClubBadge />
            <StatsUI />
         </div>
      )
   }
}
