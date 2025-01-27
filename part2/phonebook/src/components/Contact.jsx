import React from 'react'

export const Contact = ({ id, name, number, handleDeleteBtn }) => {
  return (
    <div>
      {name} {number} <button onClick={() => {handleDeleteBtn(id)}}>delete</button>
    </div>
  )
}
