import './App.css'
import Welcome from './components/Welcome';
import BomDia from './components/BomDia';
import Pai
 from './components/Pai';
import { Descricao } from './components/Descricao';
import Cachorro from './components/Cachorro';
import { Counter } from './components/Counter';
import { UseInfoForm } from './components/UseInfoForm';
import { Button } from './components/Button';
import { PaiFunction } from './components/PaiFunction';
import { Form } from './components/Form';
import { RenderCondicional } from './components/RenderCondicional';
import { LoginButton } from './components/LoginButton';
import { Warning } from './components/Warning';
import { NumberList } from './components/NumberList';
import { BotaoEstilizado } from './components/BotaoEstilizado';
import { BotaoAzul } from './components/BotaoAzul';
import { Exercicios } from './components/Exercicios';

function App() {
  return (
    <>
      {/*6.1 - Criação de componente */}
      <Welcome/>
      {/*6.2 - Expressões do JSX */}
      <BomDia/>
      {/*6.3 - Componente dentro de componente*/}
      <Pai/>
      {/*6.4 - Props */}
      <Descricao nome="Bob" idade={30}/>
      {/*6.5 - Desestruturação de props*/}
      <Cachorro nome="Shark" raca="Pastor Alemão"/>
      {/*6.6 - useState -> hook*/}
      <Counter/>
      {/*6.7 - Múltiplos estados */}
      <UseInfoForm/>
      {/*6.8 - Eventos */}
      <Button/>
      {/*6.9 - Passar funções de manipulação de eventos como props*/}
      <PaiFunction/>
      {/*6.10 - Eventos de form */}
      <Form/>
      {/*6.11 - Renderização condicional*/}
      <RenderCondicional user="Vanessa"/>
      {/*6.12 - Expressão Ternária */}
      <LoginButton loggedIn={false}/>
      <LoginButton loggedIn={true}/>
      {/*6.13 - Render nulo */}
      <Warning warning="Temos um warning"/>
      {/*6.14 - Listas e Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
      {/*6.15 - Estilos por atributo */}
      <BotaoEstilizado/>
      {/*6.16 - Estilos globais */}
      <BotaoAzul/>
      {/*6.17 - Exercícios */}
      <Exercicios/>
    </>
  ); 

}
export default App
