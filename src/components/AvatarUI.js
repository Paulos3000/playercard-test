import React, { Component } from 'react'
import classNames from 'classnames'

import Headshot from './Headshot'

const AvatarUI = ({ playerData, playerId, menuIsOpen, toggleMenu, selectPlayer }) => {

   // dynamic class to update bootstrap glyphicon when menu state is changed
   let arrowDirection = classNames({
      'up': menuIsOpen,
      'down': !menuIsOpen,
    });

   return (
      <div className='card-section avatar-section'>

         <div className='player-selector'>
            <p>Select a player...</p>
            <div
               onClick={toggleMenu}
               className={`dropdown glyphicon glyphicon-menu-${arrowDirection}`}>
            </div>
         </div>
         {!menuIsOpen ? '' :
            <div className='player-dropdown'>
               {playerData.map( (player, i) =>
                  <div
                     key={i}
                     onClick={() => selectPlayer(player.player.id)}
                     className='playeroption'>
                     <p>{player.player.name.first} {player.player.name.last}</p>
                  </div>
               )}
            </div>
         }
         <Headshot playerId={playerId} />

      </div>
   )

}

export default AvatarUI
