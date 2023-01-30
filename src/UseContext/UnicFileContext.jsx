//import P from 'prop-types';
import { useContext, useState, createContext } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo que está no context',
  body: 'O body do context',
  counter: 0,
};

//É para ser usado quando vc quer passar uma prop para um conjunto de components que tem varias filhos e vc quer passar essas props para algum dos últimos filhos.
//sempre q usar o React.createContext, tem q se lembrar de passar .provider no component, e um value
const GlobalContext = createContext();

//eslint-disable-next-line
const Home = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

//eslint-disable-next-line
const H1 = () => {
  //sempre q usar o React.createContext,  para pegar as propriedades do value é obrigado a usar useContext
  const theContext = useContext(GlobalContext);
  //sem muito esforço e sem utilizar props passada de pai para filho eu peguei uma prop q foi passada para o componente App, sem ter q passar para os pais dos outro component via props

  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title}, Contador: {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState); //não é o ideal usar o useState para objetos muito grande
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Home />
    </GlobalContext.Provider>
  );
}

export default App;
