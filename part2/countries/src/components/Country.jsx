import React from 'react'

export const Country = ({ value, showAction }) => {
  return (
    <div>{value} <button onClick={() => showAction(value)}>show</button></div>
  )
}
