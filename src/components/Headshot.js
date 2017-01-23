import React from 'react'

const Headshot = ({ playerId }) => (
   <div className='headshot-container'>
      {
         !playerId ?
         <div>
            <h3 className='loading2'>Loading</h3>
         </div> :
         <img className='headshot' src={`/img/p${playerId}-tiny.png`} />
      }

   </div>
)

export default Headshot
