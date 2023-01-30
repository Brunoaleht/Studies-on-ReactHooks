//import P from 'prop-types';
import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo é Reducer',
  body: 'Body do meu StateApp',
  counter: 0,
};

//essa função reducer ele recebe por padrão um state e uma action
const reducer = (state, action) => {
  //e ela tem q retornar um state novo
  switch (action.type) {
    case 'change': {
      console.log('Chamou muda neste: ', action.payload);
      return { ...state, title: `O titulo mudou em: ${action.payload}` };
    }
    case 'invert': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
    case 'increment': {
      console.log('Chamou increment');
      const { counter } = state;
      return { ...state, counter: counter + 1 };
    }
  }
  console.log('Sem action definida');
  return { ...state };
};

function App7() {
  //sempre q usarmos useReducer temos q criar um função reducer
  //pois useReducer recebe como valor esta função reducer e o state inicial
  //O use reducer é bem parecido com o useState
  // dentro colchetes da const [] q usa useReducer passa duas coisas: state e uma function dispatch
  const [state, dispatch] = useReducer(reducer, globalState);
  //dispatch é function q vai disparar as minhas actions
  //a função dispatch vai sempre receber um objeto
  //e as minhas action dentro deste objeto da function dispatch, são chamadas de type
  //muito importante passar o payload q é o dados de alguma coisa q vc queira passar para action

  const { title, body, counter } = state;
  return (
    <div>
      <h1>
        {title}, e meu contador: {counter}
      </h1>
      <p onClick={() => dispatch({ type: 'increment' })}>{body}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'change',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click Change Title
      </button>
      <button onClick={() => dispatch({ type: 'invert' })}>Invert Title</button>
    </div>
  );
}

export default App7;
