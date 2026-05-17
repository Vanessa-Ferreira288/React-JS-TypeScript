import { useState, useEffect } from "react"

export const PerfilDoUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const buscarUsuario = async () => {
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      )

      const dadosUsuario = await resposta.json()

      setUsuario(dadosUsuario)
    }

    if (usuarioId) {
      buscarUsuario()
    }
  }, [usuarioId])

  return (
    <div>
      {usuario ? (
        <div>
          <h2>{usuario.name}</h2>
          <p>{usuario.phone}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário</p>
      )}
    </div>
  )
}