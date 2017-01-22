import React, { Component } from 'react'

// const divStyle = {
//   clear: 'both',
// };

const StatsUI = () => (
   <div className='card-section stats-section'>
      <div className='player-header'>
         <h2>Toby Alderweireld</h2>
         <h3>Defender</h3>
      </div>
      <div className='stat-container'>
         <div className='stat-field'>
            <p><span>Appearances</span><span>10</span></p>
         </div>
         <div className='stat-field'>
            <p><span>Goals</span><span>5</span></p>
         </div>
         <div className='stat-field'>
            <p><span>Assists</span><span>2</span></p>
         </div>
         <div className='stat-field'>
            <p><span>Goals per match</span><span>0.06</span></p>
         </div>
         <div className='stat-field'>
            <p><span>Passes per minute</span><span>0.26</span></p>
         </div>
      </div>
   </div>
)

export default StatsUI
