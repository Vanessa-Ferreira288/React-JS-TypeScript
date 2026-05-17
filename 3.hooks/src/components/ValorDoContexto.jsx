import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

export const ValorDoContexto = () => {
  const {mensagem} = useContext(MeuContexto)

  return (
    <div>O valor do contexto é: {mensagem}</div>
  )
}
