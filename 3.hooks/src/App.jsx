import './App.css'
import { ExemplosUseEffect } from './components/ExemplosUseEffect';
import { Timer } from './components/Timer';
import { ComponenteFilho } from './components/ComponenteFilho';
import { MeuContextoProvider } from './contexts/MeuContexto';
import { ValorDoContexto } from './components/ValorDoContexto';
import { Contador } from './components/Contador';
import { DisplayWindowSize } from './components/DisplayWindowSize';
import { Container } from './components/Container';
import { PerfilDoUsuario } from './components/PerfilDoUsuario';
import CalculoPesado from './components/CalculoPesado';
import ContadorCallback from './components/ContadorCallback';
import ExemploLimpeza from './components/ExemploLimpeza';
import Exercises from './components/Exercises';


function App() {
    return <>
    {/*8.1 - useEffect */}
    <ExemplosUseEffect/>
    <Timer/> 
    <ExemploLimpeza/>
    {/*8.2 - useContext */}
    {/*Aplicações de pequeno e médio porte que precisam tranferir o estado entre componentes */}
    <MeuContextoProvider>
        <ComponenteFilho/>
        <ValorDoContexto/>
    </MeuContextoProvider>
    {/* 8.3 - useReducer*/}
    {/*Estados mais complexos */}
    <Contador/>
    {/*8.4 - Custom hook */}
    <DisplayWindowSize/>
    {/*8.5 - Slots e Children Props */}
    <Container>
        <h1>Título da seção</h1>
        <p>Este é o meu subtítulo</p>
    </Container>
    {/*Sicronizar o estado com props */}
    {/*prop => componente => chamada de API => resulta em um dado */}
    <PerfilDoUsuario usuarioId={1}/>
    <PerfilDoUsuario usuarioId={2}/>
    {/*8.7 - useMemo e useCallBack */}
    <CalculoPesado numero={7}/>
    <ContadorCallback/>
    {/*8.8 - Exercícios */}
    <Exercises/>

    </>;
   
}


export default App
