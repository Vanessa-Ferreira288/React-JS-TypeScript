import React from 'react'

export const BotaoEstilizado = () => {
    //class = className
    //for = htmlFor
    const estiloDoBotao = {
        //backkground-color = backgroundColor
        backgroundColor: "#333",
        color: "#fff",
        padding: "15px 32px",
        cursor: "pointer"
    }
    return (
    <div>
        <button style={estiloDoBotao}>
            Clique em mim
        </button>
    </div>
  )
}
