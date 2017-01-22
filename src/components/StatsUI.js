import React, { Component } from 'react'

const StatsUI = () => (
   <div className='card-section stats-section'>
      <div className='player-header'>
         <h2>Toby Alderweireld</h2>
         <h3>Defender</h3>
      </div>
      <div className='stat-container'>
         <div className='stat-field'>
            <p className='attribute'>Appearances</p>
         </div>
         <div className='stat-field'>
            <p className='attribute'>Goals</p>
         </div>
         <div className='stat-field'>
            <p className='attribute'>Assists</p>
         </div>
         <div className='stat-field'>
            <p className='attribute'>Goals per match</p>
         </div>
         <div className='stat-field'>
            <p className='attribute'>Passes per minute</p>
         </div>
      </div>
   </div>
)

export default StatsUI
