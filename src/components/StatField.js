import React from 'react'

const StatField = ({ attribute, value }) => {

   const attributeMap = {
      D: 'Defender',
      M: 'Midfielder',
      F: 'Forward',
   }

   return (
   <div className='stat-field'>
      <p>
         <span>{attribute}</span>
         <span>{value}</span>
      </p>
   </div>
   )
}

export default StatField
