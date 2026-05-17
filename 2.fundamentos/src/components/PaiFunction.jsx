import React from 'react'
import { FilhoFuncao } from './FilhoFuncao'

export const PaiFunction = () => {
  const handleChildClick = () => {
    console.log("Clicou no botão do elemento filho!")
  }
    return (
     <div>
        <FilhoFuncao onChildClick={handleChildClick}>
        </FilhoFuncao>
     </div>
  )
}
