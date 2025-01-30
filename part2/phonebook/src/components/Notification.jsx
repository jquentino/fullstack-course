import React from 'react'

export const Notification = ({ messageObj }) => {
  const type = messageObj.type
  const message = messageObj.message
  
  if (message === null || type == null) {
    return null
  }

  return (
    <div className={type}>{message}</div>
  )
}
