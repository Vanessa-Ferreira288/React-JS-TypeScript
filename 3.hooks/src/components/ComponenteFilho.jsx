import { useContext } from "react"
import { MeuContexto } from "../contexts/MeuContexto"

export const ComponenteFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto)
  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Nova mensagem")}>Alterar mensagem</button>
    </div>
  )
}
