import React from 'react'

export const Filter = ({value, handleValueChange}) => {
  console.log('filtered value', value)
  return (
    <div>
        filter shown with {}
        <input value={value} onChange={handleValueChange} /> 
    </div>
  )
}
