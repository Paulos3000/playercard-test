import React, { Component } from 'react'
import axios from 'axios'

// import components...
import PlayerSelect from './PlayerSelect'
import PlayerStats from './PlayerStats'
import ClubBadge from './ClubBadge'

export default class PlayerCard extends Component {

   constructor(props) {
      super(props)
      this.state = {
         playerData: [], // initialise playerData array before 'api' response
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
         })
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

      const {playerData, menuIsOpen} = this.state
      const playerId = this.state.selectedPlayerId

      return (
         <div className='playercard'>
            <PlayerSelect
               playerId={playerId}
               playerData={playerData.players}
               menuIsOpen={menuIsOpen}
               toggleMenu={this.toggleMenu}
               selectPlayer={this.selectPlayer}
            />
            <ClubBadge
               playerId={playerId}
               playerData={playerData.players}
            />
            <PlayerStats
               playerId={playerId}
               playerData={playerData.players}
            />
         </div>
      )
   }
}
