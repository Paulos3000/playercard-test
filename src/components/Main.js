import React, { Component } from 'react'

import PlayerCard from './PlayerCard'

export default class Main extends Component {
   render() {
      return (
         <div>
            <img src={`/img/driulis-gonzalez.jpg`}/>
            <PlayerCard />
         </div>
      )
   }
}
