import {useState} from 'react'

export const Counter = () => {
    //[Consultar, alterar]
    const [count, setCount] = useState(1)

  //Variáveis não renderizam o componente
    return (
    <div>
    <p>Você clicou {count} vezes.</p>
    <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}
