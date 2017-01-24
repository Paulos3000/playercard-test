import React from 'react'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// const CSSTransitionGroup = React.addons.CSSTransitionGroup;

const Dropdown = ({ menuIsOpen, playerData, toggleMenu, selectPlayer }) => {

   // function that returns markup for dropdown menu
   const cascadeMenu = () => {
      return (
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
      )
   }

   // dynamic class to update bootstrap glyphicon when menu state is changed
   let arrowDirection = classNames({
      'up': menuIsOpen,
      'down': !menuIsOpen,
   });

   // ternary operator to define whether menu is visible or not
   let dropdownMenu = !menuIsOpen ? '' : cascadeMenu()

   return (
   <div>
      <div className='player-selector'>
         <p>Select a player...</p>
         <div
            onClick={toggleMenu}
            className={`chevron glyphicon glyphicon-menu-${arrowDirection}`}>
         </div>
      </div>

      <div className='animation-wrapper'>
         <ReactCSSTransitionGroup
            transitionName="menu"
            transitionAppear={true}
            transitionAppearTimeout={200}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={200}
         >
            {dropdownMenu}
         </ReactCSSTransitionGroup>
      </div>

   </div>
   )
}

export default Dropdown
