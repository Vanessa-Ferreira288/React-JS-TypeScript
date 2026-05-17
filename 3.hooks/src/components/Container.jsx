import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='container'>
        <h2>TESTANDO</h2>
        <div>{children}</div>
        <p>Terminou</p>
    </div>
  )
}
