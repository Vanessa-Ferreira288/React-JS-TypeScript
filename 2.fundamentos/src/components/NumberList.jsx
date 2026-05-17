import React from 'react'

export const NumberList = ({numbers}) => {
    //DON'T USE (estruturas de loop - for, while)
    //métodos array - filter, map, reduce, ...

    //chaves - key
    //um identificador único para cada elemento
  return (
    <div>
        {numbers.map((number, index) => (
            <li key={index}>{number}</li>
        ))}
    </div>
  )
}
