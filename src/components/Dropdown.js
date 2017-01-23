import React from 'react'
import classNames from 'classnames'

const Dropdown = ({ menuIsOpen, playerData, toggleMenu, selectPlayer }) => {

   // dynamic class to update bootstrap glyphicon when menu state is changed
   let arrowDirection = classNames({
      'up': menuIsOpen,
      'down': !menuIsOpen,
   });

   return (
   <div>
      <div className='player-selector'>
         <p>Select a player...</p>
         <div
            onClick={toggleMenu}
            className={`chevron glyphicon glyphicon-menu-${arrowDirection}`}>
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
      </div>}
   </div>
   )
}

export default Dropdown
