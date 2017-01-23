import React from 'react'

const Headshot = ({ playerId }) => (
   <div className='headshot-container'>
      <img className='headshot' src={`/img/p${playerId}-tiny.png`} />
   </div>
)

export default Headshot
