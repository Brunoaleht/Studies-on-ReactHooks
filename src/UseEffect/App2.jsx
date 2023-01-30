import './App2.css';
import { useState, useEffect } from 'react';

const eventFn = () => console.log('h1 clicado');

function App2() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //componentDidUpdate: executa todas as vezes q o component atualiza
  // useEffect(() => console.log('componentDidUpdate'));

  //componentDidMount: executa quando o component é montado na tela, uma única vez
  // useEffect(() => console.log('componentDidMount'), []); //se passado um array vazio ele ira ser executado apenas uma vez, este array vazio é o array de dependência.

  //componentWillUmount: toda vez q o nosso component for ser desmontado ai querer executar algo q  vai querer limpar alguma coisa., ou seja limpeza
  useEffect(() => {
    document.querySelector('h1').addEventListener('click', eventFn);
    //dentro deste retorno eu quero limpar as coias q eu deixei na pagina
    //em qualquer tipo de useEffect se eu quiser limpar eu tenho q retornar uma função q limpe oq eu quiser limpar
    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  }, []);

  // no caso de haver dependência a função só ira ser chamada se a minha dependência mudar, com dependência quero dizer state, executa toda as vezes q a minha dependência mudar.
  //sempre q usar uma variável dentro da função do primeiro parâmetro do useEffect eu tenho q colocar como dependência do mesmo
  //Eu posso usar as funções de set, porem não posso passar dentro da função de set as dependências, pois isso gera um loop infinito
  useEffect(() => {
    console.log('C1:', counter, 'C2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        INCREMENT C1
      </button>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        INCREMENT C2
      </button>
    </div>
  );
}

export default App2;
