import React, { Component } from 'react'
import classNames from 'classnames'

// import components...
import Headshot from './Headshot'
import Dropdown from './Dropdown'

const PlayerSelect = ({ playerData, playerId, menuIsOpen, toggleMenu, selectPlayer }) => {

   // dynamic class to update bootstrap glyphicon when menu state is changed
   let arrowDirection = classNames({
      'up': menuIsOpen,
      'down': !menuIsOpen,
    });

   // render dropdown menu and player headshot
   return (
      <div className='card-section playerselect'>
         <Dropdown
            playerData={playerData}
            menuIsOpen={menuIsOpen}
            toggleMenu={toggleMenu}
            selectPlayer={selectPlayer}
         />
         <Headshot playerId={playerId} />
      </div>
   )

}

export default PlayerSelect
