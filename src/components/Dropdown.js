import React from 'react'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// const CSSTransitionGroup = React.addons.CSSTransitionGroup;

const Dropdown = ({ menuIsOpen, playerData, toggleMenu, selectPlayer }) => {

   // dynamic class to update bootstrap glyphicon when menu state is changed
   let direction = classNames({
      'up': menuIsOpen,
      'down': !menuIsOpen,
   });

   // function that returns markup for dropdown menu
   const renderMenu = () => {
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

   // ternary operator to define whether menu is visible or not
   let dropdownMenu = !menuIsOpen ? '' : renderMenu()

   return (
   <div>
      <div className='player-selector'>
         <p>Select a player...</p>
         <div
            onClick={toggleMenu}
            className={`chevron glyphicon glyphicon-menu-${direction}`}>
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
