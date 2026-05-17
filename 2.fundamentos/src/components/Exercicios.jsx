import {useState} from 'react'

// EXERCÍCIO 01
    const Greeting = ({name}) => {
        return <h1>Olá, {name}</h1>
    }
//EXERCÍCIO 02
    const Counter = () => {
        const[count, setCount] = useState(0)

        return (
            <div>
                <p>Você clicou {count} vezes no botão</p>
                <button onClick={() => setCount(count + 1)}>Clique em mim</button>
                <button onClick={() => setCount(count - 1)}>Decremetar</button>
            </div>
        )
    }
//EXERCÍCIO 03
    const TaskList = ({ tasks }) => {
        if (tasks.length === 0){
            return <p>Não há tarefas para mostrar</p>
        }
        return (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        )
    }
//Não é a mehlor forma de fazer
export const Exercicios = () => {
    //Dados de exemplo para o componente TaskList
    const tasks = [
        {id: 1, text: "Comprar leite"},
        {id: 2, text: "Estudar React"}
    ]
  return (
    <div>
        <h2>Exercício 1</h2>
        <Greeting name={"Vanessa"}/>
        <h2>Exercício 02</h2>
        <Counter/>
        <h2>Exercício 03</h2>
        <TaskList tasks= {tasks}/>
    </div>
  )
}
