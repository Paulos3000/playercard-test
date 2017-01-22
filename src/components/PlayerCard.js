import React, { Component } from 'react'
import axios from 'axios'

// import components...
import AvatarUI from './AvatarUI'
import StatsUI from './StatsUI'
import ClubBadge from './ClubBadge'

export default class PlayerCard extends Component {

   constructor(props) {
      super(props)
      console.log('initialise state')
      this.state = {
         playerData: {}, // initilise playerData object before 'api' response
         selectedPlayerId: 4916, // intialise playerId for Toby Alderweireld
         menuIsOpen: false // menu is unopen on page load
      }
   }

   componentDidMount() {
      // pull in all player data (simulate api request)
      axios.get('./data/player-stats.json')
         .then(res => {
            console.log('data fetch successful')
            const playerData = res.data
            this.setState({ playerData });
         });
   }

   // Toggle menu state between up and down
   toggleMenu = () => {
      this.setState({
         menuIsOpen: !this.state.menuIsOpen
      });
   }

   // Select player
   selectPlayer = (playerId) => {
      this.setState({
         selectedPlayerId: playerId,
         menuIsOpen: !this.state.menuIsOpen
      });
   }

   render() {

      // the selected player's id
      console.log('this.state.selectedPlayerId: ', this.state.selectedPlayerId)

      const {playerData, selectedPlayerId, menuIsOpen} = this.state

      // use id to return other values needed:
      // fullName
      // stats

      return (
         <div className='playercard'>
            <AvatarUI
               playerId={selectedPlayerId}
               playerData={playerData.players}
               menuIsOpen={menuIsOpen}
               toggleMenu={this.toggleMenu}
               selectPlayer={this.selectPlayer}
            />
            <ClubBadge
               playerId={selectedPlayerId}
               playerData={playerData.players}
            />
            <StatsUI
               playerId={selectedPlayerId}
               playerData={playerData.players}
            />
         </div>
      )
   }
}
