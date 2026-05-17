import React from 'react'

export const Button = () => {
    const handleClick = () => {
        console.log("Clicou!")
    }

  return (
    <button onClick={handleClick}>Clique em mim</button>
  )
}
