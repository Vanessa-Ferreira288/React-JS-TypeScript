import {useState, useEffect} from 'react'

export const Timer = () => {
    const [segundos, setSegundos] = useState(0)
    //setInterval, setTimeout
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1)
        }, 1000)
    //limpeza de estado
        return () => clearInterval(intervalId)
    }, [])//array de dependecias vazio
    return (
    <div>Timer: {segundos} segundos.</div>
  )
}
