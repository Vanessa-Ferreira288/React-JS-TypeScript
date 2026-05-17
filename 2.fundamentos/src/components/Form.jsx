import {useState} from 'react'

export const Form = () => {
    
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        //manipulação de dados
        //validação
        //envio ao servidor pela API
        //loading
        //chamda de função de mensagens de erro/bem sucedido

        event.preventDefault()

        console.log("Formulário enviado", value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            placeholder='Preencha o campo'/>
            <button type='submit'>Enviar</button>
        </form>
  )
}
