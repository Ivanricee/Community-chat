import React from 'react'

export const Introduction = ({ channelTitle, className }) => {
  return (
    <div className={className}>
      <div>
        <h1>#</h1>
      </div>
      <h1>¡Te damos la bienvenida a #{channelTitle}</h1>
      <span>Aquí empieza el canal #{channelTitle}</span>
    </div>
  )
}
