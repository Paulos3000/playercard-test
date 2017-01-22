import React, { Component } from 'react'

const AvatarUI = ({ menuIsOpen, switchMenu }) => {

   return (
      <div className='card-section avatar-section'>
         <div className='player-selector'>
            <p>Select a player...</p>
            <div
               onClick={switchMenu}
               className={`dropdown glyphicon glyphicon-menu-up`}>
            </div>
         </div>
         {!menuIsOpen ? '' :
            <div className='player-dropdown'>
               <div className='playeroption'><p>Player Name</p></div>
               <div className='playeroption'><p>Player Name</p></div>
               <div className='playeroption'><p>Player Name</p></div>
               <div className='playeroption'><p>Player Name</p></div>
            </div>
         }
         <div className='headshot-container'>
            <img className='headshot' src='/img/p4916.png' />
         </div>
      </div>
   )

}

export default AvatarUI
