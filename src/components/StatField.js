import React from 'react'

const StatField = ({ attribute, value }) => {

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
