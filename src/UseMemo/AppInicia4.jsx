import P from 'prop-types';
import './App.css';
import React, { useCallback, useMemo, useState } from 'react';

//Inicia o component Button
//O React.memo ele chega se o component mudou, se o component não mudou ele deixa o mesmo, se o component mudou ele gera um novo component
//Uma forma de substituir o React.memo, é o hook useMemo
//ele funciona da mesma forma só q passando uma função e um array de dependências
const Button = ({ incrementButton }) => {
  console.log('filho renderizando');
  //Nesse caso o componente está sendo gerado novamente devido q a function app esta renderizando toda novamente, isto é esta gerando uma nova function handleClick, q é a prop incrementButton
  return (
    <button type="button" onClick={() => incrementButton(100)}>
      INCREMENT C1
    </button>
  );
};

Button.propTypes = {
  incrementButton: P.func,
};
//Aqui acaba o componente Button
function App() {
  const [counter, setCounter] = useState(0);
  //no component função as funções dentro do componente pai são renderizadas juntos, tomar cuidado com isso.
  console.log('pai renderizando');
  //sempre q for usar useCallback lembre de só usar com função q faça um carregamento pesado
  //O useCallback ele serve para salvar a função, e nele se passa a função e um array de dependências, porem cuidado pois sempre q a dependência mudar o useCallback ira recriar a sua função
  const handleClick = useCallback(
    //function a ser salva
    //por está usando o setCounter do meu useState, eu posso usar o prevCounter e assim liberar o counter das minhas dependências do useCallback
    (num) => {
      setCounter((c) => c + num);
    },
    //---------------------------Usei a estrategia do prevCounter do setCounter do meu useState, para me livra do counter como dependência
    //dependências:
    [],
    //--------------Como não há dependência essa função só é renderiza uma vez e fica salvo no cache
  );

  const btn = useMemo(() => {
    return <Button incrementButton={handleClick} />;
  }, [handleClick]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
