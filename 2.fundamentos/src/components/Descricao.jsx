import React from 'react'

export const Descricao = (props) => {
    //props = {}
    // propriedades -> chaves dos valores
    // props.nome = "Matheus"
  return (
    <div>
        <p>Seu nome é {props.nome}</p>
        <p>E você tem {props.idade} anos de idade.</p>
    </div>
  )
}
